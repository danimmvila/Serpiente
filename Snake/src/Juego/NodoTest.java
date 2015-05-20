package Juego;

import static org.junit.Assert.*;

import org.junit.Test;

public class NodoTest {

	Nodo n = new Nodo(30, 30);
	Nodo n2 = new Nodo(40, 25);

	@Test
	public void testNodo() {
		n = new Nodo(30, 30);
		n2 = new Nodo(40, 25);
		assertEquals(n.getClass(), Nodo.class);
		assertEquals(n2.getClass(), Nodo.class);
	}

	@Test
	public void testGetRow() {
		assertEquals(n.getRow(),30);
		assertEquals(n2.getRow(),40);
	}

	@Test
	public void testGetCol() {
		assertEquals(n.getCol(),30);
		assertEquals(n2.getCol(),25);
	}

}
