export async function getCourses() {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/courses", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Error fetching courses: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    return null; // Return null or an empty object as a fallback
  }
}

export async function getYoutubeCourses() {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/courses/youtube",
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error(`Error fetching YouTube courses: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    return null; // Return null or an empty object as a fallback
  }
}

export async function getCourse(slug: string) {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/course/" + slug,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      return null; // Fallback to null if course fetching fails
    }

    return res.json();
  } catch (error) {
    return null; // Return null in case of error
  }
}
