package animals;

public class Animal {
	private String species;
	private String habitat;

	public Animal(String species, String habitat) {
		this.species = species;
		this.habitat = habitat;
	}

	public String getSpecies() {
		return species;
	}

	public String getHabitat() {
		return habitat;
	}
}
