const baseUrl = process.env.REACT_APP_PROPERTY_API;
export async function getProperties(count = 6, propertyType) {
  try {
    const response = await fetch(`${baseUrl}/properties?count=${count}&property_type=${propertyType}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getPropertyInfo(id) {
  try {
    const response = await fetch(`${baseUrl}/property/${id}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}