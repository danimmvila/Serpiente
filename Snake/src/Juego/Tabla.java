package Juego;

import java.awt.Color;
import java.awt.Graphics;
import java.awt.SystemColor;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyAdapter;
import java.awt.event.KeyEvent;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.Timer;

public class Tabla extends JPanel {

	
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	public static final int NUMFILAS = 40;
	public static final int NUMCOLS = 60;
	private Serpiente serpiente;
	private static Puntos puntos;
	private Timer timer;
	private Timer timerSpecial;
	private int deltaTime;
	private static Comida comida;
	private static boolean gameOver;

	/**
	 * Creación del panel de juego.
	 * 
	 * @param scoreBoard
	 */

	public Tabla(Puntos scoreBoard) {
		setBackground(SystemColor.desktop);
		setLayout(null);
		puntos = scoreBoard;
		deltaTime = 80;
		setFocusable(true);
		init();
	}

	/**
	 * Inicializacion de los componentes del panel.
	 */
	public void init() {
		serpiente = new Serpiente(this);
		puntos.resetScore();
		newFood();
		setGameOver(false);
		MyKeyAdapter keyAdapter = new MyKeyAdapter();
		addKeyListener(keyAdapter);
		run();
	}

	class MyKeyAdapter extends KeyAdapter {
		@Override
		public void keyPressed(KeyEvent e) {
			switch (e.getKeyCode()) {
			case KeyEvent.VK_LEFT:
				if (serpiente.getDireccion() != Direccion.est)
					serpiente.setDireccion(Direccion.west);
				break;
			case KeyEvent.VK_RIGHT:
				if (!serpiente.getDireccion().equals(Direccion.west))
					serpiente.setDireccion(Direccion.est);
				break;
			case KeyEvent.VK_UP:
				if (serpiente.getDireccion() != Direccion.south)
					serpiente.setDireccion(Direccion.north);
				break;
			case KeyEvent.VK_DOWN:
				if (!serpiente.getDireccion().equals(Direccion.north))
					serpiente.setDireccion(Direccion.south);
				break;
			default:
				break;
			}
		}
	}

	/**
	 * Dibuja un cuadrado en el panel de juego.
	 * 
	 * @param g
	 * @param row
	 * @param col
	 * @param square
	 */
	private void pintarCuadrado(Graphics g, int row, int col,
			TiposCuadrados square) {
		Color colors[] = { Color.gray, Color.BLACK, Color.green, Color.red };
		int x = col * anchoCuadrado();
		int y = row * altoCuadrado();
		Color color = colors[square.ordinal()];
		g.setColor(color);
		g.fillRect(x, y, anchoCuadrado(), altoCuadrado());
	}

	/**
	 * @return altoCuadrado.
	 */
	private int altoCuadrado() {
		return getHeight() / NUMFILAS;
	}

	/**
	 * @return anchoCuadrado.
	 */
	private int anchoCuadrado() {
		return getWidth() / NUMCOLS;
	}

	/**
	 * Dibuja la serpiente.
	 * 
	 * @param g
	 */
	public void pintarSerpiente(Graphics g) {
		pintarCuadrado(g, serpiente.getCuerpo().get(0).getRow(), serpiente
				.getCuerpo().get(0).getCol(), TiposCuadrados.snakeHead);
		for (int i = 1; i < serpiente.getCuerpo().size(); i++) {
			pintarCuadrado(g, serpiente.getCuerpo().get(i).getRow(), serpiente
					.getCuerpo().get(i).getCol(), TiposCuadrados.snakeBody);
		}
	}

	/**
	 * Dibuja la comida.
	 * 
	 * @param g
	 */
	public void pintarComida(Graphics g) {
		if (comida.isEspecial()) {
			pintarCuadrado(g, comida.getFila(), comida.getCol(),
					TiposCuadrados.specialFoot);
		} else {
			pintarCuadrado(g, comida.getFila(), comida.getCol(),
					TiposCuadrados.food);
		}
	}

	/**
	 * Creación de una nueva comida en el panel de juego.
	 */
	public void newFood() {
		if (timerSpecial != null)
			timerSpecial.stop();
		int y;
		int x;
		do {
			x = (int) (Math.random() * NUMFILAS);
			y = (int) (Math.random() * NUMCOLS);
		} while (isSerpiente(x, y));
		comida = new Comida(x, y);
		if (comida.isEspecial()) {
			timerSpecial = new Timer(10000, new ActionListener() {
				@Override
				public void actionPerformed(ActionEvent e) {
					timerSpecial.stop();
					newFood();
				}
			});
			timerSpecial.start();
		}
	}

	/**
	 * Método para el funcionamiento del juego.
	 */
	public void run() {
		timer = new Timer(deltaTime, new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {
				serpiente.avance();
				repaint();
				if (isGameOver()) {
					timer.stop();
					gameOver();
				}
			}
		});
		timer.start();
	}

	/**
	 * @param row
	 * @param col
	 * @return booleano si en esa posicion hay serpiente o no.
	 */
	public boolean isSerpiente(int row, int col) {
		for (int i = 0; i < serpiente.getCuerpo().size(); i++) {
			if (row == serpiente.getCuerpo().get(i).getRow()
					&& col == serpiente.getCuerpo().get(i).getCol())
				return true;
		}
		return false;
	}

	/**
	 * @param row
	 * @param col
	 * @return booleano si en esa posicion hay comida o no.
	 */
	public boolean isFood(int row, int col) {
		if (row == comida.getFila() && col == comida.getCol())
			return true;
		return false;
	}

	/**
	 * @return gameOver.
	 */
	public boolean isGameOver() {
		return gameOver;
	}

	public Comida getComida() {
		return comida;
	}

	/**
	 * @param gameover
	 */
	public void setGameOver(boolean gameover) {
		gameOver = gameover;
	}

	/**
	 * Método para incrementar la puntuación.
	 */
	public void incrementScore() {
		if (comida.isEspecial())
			puntos.setScore(35);
		else
			puntos.setScore(10);
	}

	/**
	 * Método para el fin del juego.
	 */
	public void gameOver() {
		gameOver = false;
		String[] options = new String[] { "Reset", "Exit" };
		int response = -1;
		response = JOptionPane.showOptionDialog(null,
				"Points: " + puntos.getScore(), "GAME OVER",
				JOptionPane.DEFAULT_OPTION, JOptionPane.PLAIN_MESSAGE, null,
				options, options[1]);
		if (response == 0)
			init();
		if (response == 1) {
			System.exit(0);
		}
	}

	public Serpiente getSerpiente() {
		return serpiente;
	}

	@Override
	protected void paintComponent(Graphics g) {
		super.paintComponent(g);
		pintarSerpiente(g);
		pintarComida(g);
		System.out.println(getWidth() + "  " + getHeight());
	}
}
