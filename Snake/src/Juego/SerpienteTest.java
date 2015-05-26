package Juego;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

public class SerpienteTest {

	Puntos p = new Puntos();
	Tabla t = new Tabla(p);
	Serpiente s = new Serpiente(t);

	@Test
	public void testSerpiente() {
		assertEquals(s.getClass(), Serpiente.class);
	}

	@Test
	public void testAvance() {
		int col = Tabla.NUMCOLS / 2;
		assertEquals(s.getCuerpo().get(0).getCol(), col);
		s.avance();
		col++;
		assertEquals(s.getCuerpo().get(0).getCol(), col);
		s.avance();
		col++;
		assertEquals(s.getCuerpo().get(0).getCol(), col);
		s.avance();
		col++;
		assertEquals(s.getCuerpo().get(0).getCol(), col);
	}

	@Before
	public void direccionDerecha() {
		s.setDireccion(Direccion.est);
	}

	@Test
	public void testGetDireccion() {
		assertEquals(s.getDireccion(), Direccion.est);
		s.setDireccion(Direccion.west);
		assertEquals(s.getDireccion(), Direccion.west);
		s.setDireccion(Direccion.north);
		assertEquals(s.getDireccion(), Direccion.north);
	}

	@Test
	public void testSetDireccion() {
		assertEquals(s.getDireccion(), Direccion.est);
		s.setDireccion(Direccion.north);
		assertEquals(s.getDireccion(), Direccion.north);
		s.setDireccion(Direccion.south);
		assertEquals(s.getDireccion(), Direccion.south);
	}

	@Test
	public void testGetCuerpo() {
		assertEquals(s.getCuerpo().get(0).getClass(), Nodo.class);
		assertEquals(s.getCuerpo().get(1).getClass(), Nodo.class);
		assertEquals(s.getCuerpo().get(5).getClass(), Nodo.class);
	}
}
