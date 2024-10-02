class CityService {
  constructor(db) {
    this.client = db.sequelize;
    this.City = db.City;
  }

  // Get all cities
  async getAll() {
    return this.City.findAll({
      where: {},
    });
  }

  // Create a new city
  async create(name, country) {
    try {
      return await this.City.create({ Name: name, Country: country });
    } catch (err) {
      console.error("Error creating city", err);
      throw new Error("Failed to create a new city");
    }
  }

  // Delete a city by name
  async deleteOne(name) {
    if (!name) {
      throw new Error("You have to provide a city name to delete");
    }

    const cityToDelete = await this.City.findOne({
      where: { Name: name },
    });

    if (!cityToDelete) {
      throw new Error(`City ${name} not found`);
    }

    await cityToDelete.destroy();
  }

  // Update a city by old name and country
  async updateOne(oldCityName, oldCountryName, newCityName, newCountryName) {
    if (!oldCityName || !oldCountryName || !newCityName || !newCountryName) {
      throw new Error("Enter all fields correctly");
    }

    const cityToUpdate = await this.City.findOne({
      where: { Name: oldCityName, Country: oldCountryName },
    });

    if (!cityToUpdate) {
      throw new Error(`City ${oldCityName} not found`);
    }

    // Update the city's name and country
    cityToUpdate.Name = newCityName;
    cityToUpdate.Country = newCountryName;
    await cityToUpdate.save();
  }
}

module.exports = CityService;
