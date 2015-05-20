package Juego;

public class Comida {

	private int fila;
	private int col;
	private boolean especial;

	/** 
	 * Creación de comida para la serpiente. 
	 * @param fila
	 * @param col
	 * */
	public Comida(int fila, int col) {
		this.fila = fila;
		this.col = col;
		int rand = (int) (Math.random() * 5);
		if (rand == 3) {
			especial = true;
		} else {
			especial = false;
		}
	}
	
	/**
	 * @return booleano si es especial o no.
	 */
	public boolean isEspecial() {
		return especial;
	}

	/**
	 * 
	 * @return numero de fila.
	 */
	public int getFila() {
		return fila;
	}
	
	/**
	 * 
	 * @return numero de columna.
	 */
	public int getCol() {
		return col;
	}
}
