export async function getCourses() {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    // Check if backend URL is set
    if (!backendUrl) {
      console.error("Backend URL is not set.");
      return null;
    }

    const res = await fetch(`${backendUrl}/courses`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(
        `Error fetching courses: ${res.status} - ${res.statusText}`
      );
      return null; // Fallback to null if response is not OK
    }

    return await res.json();
  } catch (error) {
    console.error("Unexpected error fetching courses:", error);
    return null; // Return null or an empty object as a fallback
  }
}

export async function getYoutubeCourses() {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    // Check if backend URL is set
    if (!backendUrl) {
      console.error("Backend URL is not set.");
      return null;
    }

    const res = await fetch(`${backendUrl}/courses/youtube`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(
        `Error fetching YouTube courses: ${res.status} - ${res.statusText}`
      );
      return null; // Fallback to null if response is not OK
    }

    return await res.json();
  } catch (error) {
    console.error("Unexpected error fetching YouTube courses:", error);
    return null; // Return null or an empty object as a fallback
  }
}

export async function getCourse(slug: string) {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    // Check if backend URL is set
    if (!backendUrl) {
      console.error("Backend URL is not set.");
      return null;
    }

    // Ensure slug is defined and is a string
    if (!slug || typeof slug !== "string") {
      console.error("Invalid or missing course slug.");
      return null;
    }

    const res = await fetch(`${backendUrl}/course/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(
        `Error fetching course with slug "${slug}": ${res.status} - ${res.statusText}`
      );
      return null; // Fallback to null if response is not OK
    }

    return await res.json();
  } catch (error) {
    console.error(
      `Unexpected error fetching course with slug "${slug}":`,
      error
    );
    return null; // Return null in case of error
  }
}
