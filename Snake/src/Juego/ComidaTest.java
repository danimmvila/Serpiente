package Juego;

import static org.junit.Assert.*;

import org.junit.Test;

public class ComidaTest {

	Comida com=new Comida(5,5);;
	Comida com2=new Comida(25,15);
	@Test
	public void testComida() {
		com=new Comida(5,5);
		com2=new Comida(25,15);
		assertEquals(com.getClass(), Comida.class);
		assertEquals(com2.getClass(), Comida.class);
	}

	@Test
	public void testIsEspecial() {
		fail("Not yet implemented");
	}

	@Test
	public void testGetFila() {
		assertEquals(com2.getFila(), 25);
		assertEquals(com.getFila(), 5);
	}

	@Test
	public void testGetCol() {
		assertEquals(com.getCol(), 5);
		assertEquals(com2.getCol(), 15);
	}

}
