function Card({ src, name, country, category, description, entranceFee, viewDetails}) {
  return (
    <article className="bg-white dark:bg-[#192B40] group border-2 w-[300px] md:w-[320px] h-[400px] transition duration-200 shadow-md hover:shadow-3xl rounded-lg overflow-hidden">
      <img src={src} alt={name} className="group-hover:scale-110 transition duration-200 object-cover w-full h-[35%]" />
      <div className="text-lg p-3 dark:text-[#F4F4F0]">
        <h3 className="text-2xl text-[#17324D] dark:text-[#F4F4F0] mb-2 font-bold">{name}</h3>
        <p className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor" 
            className="bi bi-geo-alt-fill text-[#1769AA] dark:text-[#F4F4F0]"
            viewBox="0 0 16 16"
          >
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
          {country}
        </p>
        <p className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-star-fill dark:text-[#FFBB00]"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
          {category}
        </p>
        <p className="flex items-center gap-2 bg-blue-100 mt-5 dark:bg-[#1769AA] text-[#17324D] dark:text-[#F4F4F0] font-semibold p-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-tag-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
          </svg>
          {entranceFee}
        </p>
        <button onClick={viewDetails} className="mt-6 bg-[#1769AA] w-full text-white px-5 py-2 rounded-lg hover:bg-[#12558A]">View Details &rarr;</button>
      </div>
    </article>
  );
}

export default Card;

