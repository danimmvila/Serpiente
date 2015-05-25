package Juego;

import static org.junit.Assert.*;

import org.junit.Test;

public class TablaTest {

	Puntos s = new Puntos();
	Tabla t = new Tabla(s);

	@Test
	public void testTabla() {
		assertEquals(t.getClass(), Tabla.class);
	}

	@Test
	public void testInit() {
		t.init();
		assertEquals(t.getSerpiente().getClass(), Serpiente.class);
		assertEquals(s.getScore(), 0);
	}

	@Test
	public void testNewFood() {
		assertEquals(t.getComida().getClass(), Comida.class);
	}

	@Test
	public void testIsFood() {
		assertEquals(
				t.isFood(t.getComida().getFila(), t.getComida().getCol()),
				true);
	}

	@Test
	public void testIsSerpiente() {
		assertEquals(
				t.isSerpiente(t.getComida().getFila(), t.getComida().getCol()),
				false);
	}

	@Test
	public void testIsGameOver() {
		assertEquals(t.isGameOver(), false);
	}

	@Test
	public void testSetGameOver() {
		t.setGameOver(true);
		assertEquals(t.isGameOver(), true);
		t.init();
		assertEquals(t.isGameOver(), false);
	}
}
