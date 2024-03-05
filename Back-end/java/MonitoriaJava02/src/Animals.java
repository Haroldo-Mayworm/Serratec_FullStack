public class Animals {
	private String species;
	private String habitat;

	public Animals(String species, String habitat) {
		this.species = species;
		this.habitat = habitat;
	}

	// Getters
	public String getSpecies() {
		return species;
	}

	public String getHabitat() {
		return habitat;
	}

	// Setters
	public void setSpecies(String species) {
		this.species = species;
	}

	public void setHabitat(String habitat) {
		this.habitat = habitat;
	}
}
