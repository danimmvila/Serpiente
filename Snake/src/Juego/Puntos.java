package Juego;

import javax.swing.JPanel;
import java.awt.Color;
import javax.swing.JLabel;
import java.awt.SystemColor;
import java.awt.Font;

public class Puntos extends JPanel {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private int score;
	JLabel scoreLabel;

	/**
	 * Create the panel.
	 */
	public Puntos() {
		setBackground(Color.BLACK);
		setLayout(null);
		
		JLabel lblScore = new JLabel("Score:");
		lblScore.setBounds(42, 12, 57, 19);
		lblScore.setFont(new Font("Dialog", Font.BOLD, 16));
		lblScore.setForeground(SystemColor.desktop);
		add(lblScore);
		
		scoreLabel = new JLabel(""+score);
		scoreLabel.setFont(new Font("Dialog", Font.BOLD, 15));
		scoreLabel.setForeground(SystemColor.activeCaption);
		scoreLabel.setBounds(126, 15, 70, 15);
		add(scoreLabel);

	}

	public int getScore() {
		return score;
	}

	public void setScore(int score) {
		this.score += score;
		scoreLabel.setText(""+this.score);
	}
	
	public void resetScore() {
		score=0;
		scoreLabel.setText(""+this.score);
	}
}
