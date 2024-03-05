package com.br.packageExercicios03;

public class ClassMain {
	public static void main(String[] args) {
		Books book = new Books("A arte da guerra", "Sun Tzu", "Cultural ");
		
		book.returnDataBook();
	}
}

//3.Modele uma biblioteca com abstração. Crie classes para representar livros, abstraindo
//detalhes específicos, como número de páginas ou editora, e mantenha elementos essenciais, como
//título, autor e gênero.