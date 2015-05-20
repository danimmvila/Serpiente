package Juego;

import static org.junit.Assert.*;

import org.junit.Test;

public class TablaTest {

	Puntos s = new Puntos();
	Tabla t = new Tabla(s);

	@Test
	public void testTabla() {
		s = new Puntos();
		t = new Tabla(s);
	}

	@Test
	public void testInit() {
		t.init();
	}

	@Test
	public void testPintarSerpiente() {
		fail("Not yet implemented");
	}

	@Test
	public void testPintarComida() {
		fail("Not yet implemented");
	}

	@Test
	public void testNewFood() {
		fail("Not yet implemented");
	}

	@Test
	public void testRun() {
		fail("Not yet implemented");
	}

	@Test
	public void testIsSerpiente() {
		fail("Not yet implemented");
	}

	@Test
	public void testIsFood() {
		fail("Not yet implemented");
	}

	@Test
	public void testIsGameOver() {
		fail("Not yet implemented");
	}

	@Test
	public void testSetGameOver() {
		fail("Not yet implemented");
	}

	@Test
	public void testIncrementScore() {
		fail("Not yet implemented");
	}

	@Test
	public void testGameOver() {
		fail("Not yet implemented");
	}

	@Test
	public void testPaintComponentGraphics() {
		fail("Not yet implemented");
	}

}
