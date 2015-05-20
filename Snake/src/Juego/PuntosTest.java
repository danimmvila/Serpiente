package Juego;

import static org.junit.Assert.*;

import org.junit.Test;

public class PuntosTest {

	Puntos p=new Puntos();
	Puntos p2=new Puntos();
	@Test
	public void testPuntos() {
		assertEquals(p.getClass(), Puntos.class);
		assertEquals(p2.getClass(), Puntos.class);
	}

	@Test
	public void testGetScore() {
		fail("Not yet implemented");
	}

	@Test
	public void testSetScore() {
		fail("Not yet implemented");
	}

	@Test
	public void testResetScore() {
		p.resetScore();
		p2.resetScore();
		assertEquals(p.getScore(),0);
		assertEquals(p2.getScore(),0);
	}

}
