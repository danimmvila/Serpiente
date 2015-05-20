package Juego;

import static org.junit.Assert.*;

import org.junit.Test;

public class PuntosTest {

	Puntos p=new Puntos();
	Puntos p2=new Puntos();
	@Test
	public void testPuntos() {
		p=new Puntos();
		p2=new Puntos();
		assertEquals(p.getClass(), Puntos.class);
		assertEquals(p2.getClass(), Puntos.class);
	}

	@Test
	public void testGetScore() {
		assertEquals(p.getScore(),0);
		assertEquals(p2.getScore(),0);
	}

	@Test
	public void testSetScore() {
		p.setScore(10);
		p2.setScore(5);
		assertEquals(p.getScore(),10);
		assertEquals(p2.getScore(),5);
		p.setScore(5);
		p2.setScore(10);
		assertEquals(p.getScore(),15);
		assertEquals(p2.getScore(),20); 
	}

	@Test
	public void testResetScore() {
		p.resetScore();
		p2.resetScore();
		assertEquals(p.getScore(),0);
		assertEquals(p2.getScore(),0);
	}

}
