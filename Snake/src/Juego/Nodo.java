package Juego;

public class Nodo {

	private int fila;
	private int col;

	/**
	 * Creación de un ndo de la serpiente.
	 * @param row
	 * @param col
	 */
	public Nodo(int row, int col) {
		this.fila = row;
		this.col = col;
	}

	/**
	 * @return fila
	 */
	public int getRow() {
		return fila;
	}

	/**
	 * 
	 * @return columna
	 */
	public int getCol() {
		return col;
	}
}
