"use client";

export default function CourseSettings() {

  return (
    <form>
      <p className="text-black font-geist700 text-22p">
        Crypto Course Settings
      </p>
      <p className="text-base font-geist500 text-c828282">
        Configure your cryptocurrency course details and pricing
      </p>
      <div className=" mb-6 mt-4">
        <div className="flex flex-col space-y-6 max-w-[646px]">
          <div className="flex space-x-6 ">
            <div className="flex-1">
              <label
                htmlFor="course-name"
                className="text-sm font-geist500 text-dark1"
              >
                Course Name
              </label>
              <input
                placeholder="Enter course name"
                required
                type="text"
                id="course-name"
                className="w-full h-12 mt-2 px-4 border border-e5e5e5 rounded-xl text-sm placeholder:text-sm outline-none  "
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="course-price"
                className="text-sm font-geist500 text-dark1"
              >
                Course price ($)
              </label>
              <input
                placeholder="Enter course price"
                required
                type="number"
                id="course-price"
                className="w-full h-12 mt-2 px-4 border border-e5e5e5 rounded-xl text-sm placeholder:text-sm outline-none  "
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="course-desc"
              className="text-sm font-geist500 text-dark1"
            >
              Course description
            </label>
            <textarea
              placeholder="Enter course description"
              required
              rows={4}
              id="course-desc"
              className="w-full mt-2 p-4 resize-none border border-e5e5e5 rounded-xl text-sm placeholder:text-sm outline-none  "
            ></textarea>
          </div>

          <div className="max-w-[311px]">
            <label
              htmlFor="course-disc"
              className="text-sm font-geist500 text-dark1"
            >
              Crypto payment discount (%)
            </label>
            <input
              placeholder="Enter crypto payment discount"
              required
              type="number"
              id="course-disc"
              className="w-full h-12 mt-2 px-4 border border-e5e5e5 rounded-xl text-sm placeholder:text-sm outline-none  "
            />
          </div>
        </div>
      </div>

      <button className="flex items-center mt-4 text-sm font-geistRegular text-white h-37p px-3 bg-primarygreen1 rounded-xl">
        Save settings
      </button>
    </form>
  );
}
