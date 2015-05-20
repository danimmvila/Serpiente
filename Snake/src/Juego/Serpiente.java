package Juego;

import java.util.ArrayList;
import java.util.List;
import javax.swing.JPanel;

public class Serpiente extends JPanel {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private ArrayList<Nodo> cuerpo;
	private Direccion direction;
	private Tabla parent;

	/**
	 * Creacion de la serpiente.
	 * @param board
	 */
	public Serpiente(Tabla board) {
		int x = Tabla.NUMFILAS / 2;
		int y = Tabla.NUMCOLS / 2;
		cuerpo = new ArrayList<Nodo>();
		cuerpo.add(0, new Nodo(x, y));
		for (int i = 1; i < 6; i++) {
			cuerpo.add(new Nodo(cuerpo.get(i - 1).getRow(), cuerpo.get(i - 1)
					.getCol() - 1));
		}
		direction = Direccion.est;
		parent = board;
	}

	/**
	 * Método de avance de la serpiente.
	 */
	public void avance() {
		if (direction == Direccion.est) {
			int col = cuerpo.get(0).getCol() + 1;
			if (col > Tabla.NUMCOLS - 1)
				col = 0;
			if (parent.isSerpiente(cuerpo.get(0).getRow(), col))
				parent.setGameOver(true);
			if (parent.isFood(cuerpo.get(0).getRow(), col)) {
				cuerpo.add(0, new Nodo(cuerpo.get(0).getRow(), col));
				parent.incrementScore();
				parent.newFood();
			} else {
				cuerpo.remove(cuerpo.size() - 1);
				cuerpo.add(0, new Nodo(cuerpo.get(0).getRow(), col));
			}
		}
		if (direction == Direccion.west) {
			int col = cuerpo.get(0).getCol() - 1;
			if (col < 0)
				col = Tabla.NUMCOLS - 1;
			if (parent.isSerpiente(cuerpo.get(0).getRow(), col))
				parent.setGameOver(true);
			if (parent.isFood(cuerpo.get(0).getRow(), col)) {
				cuerpo.add(0, new Nodo(cuerpo.get(0).getRow(), col));
				parent.incrementScore();
				parent.newFood();
			} else {
				cuerpo.remove(cuerpo.size() - 1);
				cuerpo.add(0, new Nodo(cuerpo.get(0).getRow(), col));
			}
		}
		if (direction == Direccion.north) {
			int row = cuerpo.get(0).getRow() - 1;
			if (row < 0)
				row = Tabla.NUMFILAS - 1;
			if (parent.isSerpiente(row, cuerpo.get(0).getCol()))
				parent.setGameOver(true);
			if (parent.isFood(row, cuerpo.get(0).getCol())) {
				cuerpo.add(0, new Nodo(row, cuerpo.get(0).getCol()));
				parent.incrementScore();
				parent.newFood();
			} else {
				cuerpo.remove(cuerpo.size() - 1);
				cuerpo.add(0, new Nodo(row, cuerpo.get(0).getCol()));
			}
		}
		if (direction == Direccion.south) {
			int row = cuerpo.get(0).getRow() + 1;
			if (row > Tabla.NUMFILAS - 1)
				row = 0;
			if (parent.isSerpiente(row, cuerpo.get(0).getCol()))
				parent.setGameOver(true);
			if (parent.isFood(row, cuerpo.get(0).getCol())) {
				cuerpo.add(0, new Nodo(row, cuerpo.get(0).getCol()));
				parent.incrementScore();
				parent.newFood();
			} else {
				cuerpo.remove(cuerpo.size() - 1);
				cuerpo.add(0, new Nodo(row, cuerpo.get(0).getCol()));
			}
		}
	}

	/**
	 * @return direccion
	 */
	public Direccion getDireccion() {
		return direction;
	}

	/**
	 * @param direccion
	 */
	public void setDireccion(Direccion direction) {
		this.direction = direction;
	}

	/**
	 * @return cuerpo
	 */
	public List<Nodo> getCuerpo() {
		return cuerpo;
	}
}
