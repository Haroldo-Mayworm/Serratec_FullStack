public class Books {
	private String title;
	private String author;

	public Books(String title, String author) {
		super();
		this.title = title;
		this.author = author;
	}

	// Getters
	public String getTitle() {
		return title;
	}

	public String getAuthor() {
		return author;
	}

	// Setters
	public void setTitle(String title) {
		this.title = title;
	}

	public void setAuthor(String author) {
		this.author = author;
	}
}
