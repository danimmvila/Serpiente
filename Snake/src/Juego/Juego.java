package Juego;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.EventQueue;
import javax.swing.JFrame;
import javax.swing.JPanel;

public class Juego extends JFrame {

	/**
	 * @author Dani Martínez
	 */
	private static final long serialVersionUID = 1L;
	private JPanel contentPane;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					Juego frame = new Juego();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Creación del frame.
	 */
	public Juego() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setResizable(false);
		setBackground(Color.BLACK);
		getContentPane().setLayout(new BorderLayout());
		setBounds(100, 100, 600, 440);
		Puntos scoreBoard = new Puntos();
		scoreBoard.setPreferredSize(new Dimension(600, 40));
		contentPane = new Tabla(scoreBoard);
		getContentPane().add(contentPane, BorderLayout.CENTER);
		getContentPane().add(scoreBoard, BorderLayout.SOUTH);
	}

}
