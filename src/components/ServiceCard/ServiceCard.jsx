const icons = {
  test: (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="14"
        y="8"
        width="30"
        height="42"
        rx="3"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      <path
        d="M21 18H37"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M21 26H37"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M21 34H31"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M39 43L48 34L55 41L46 50L37 53L39 43Z"
        fill="white"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      <path
        d="M48 34L52 30L59 37L55 41"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  ),

  consult: (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="22"
        cy="19"
        r="7"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      <path
        d="M10 39C10 31.8 15.4 27 22 27C28.6 27 34 31.8 34 39"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <circle
        cx="45"
        cy="25"
        r="7"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      <path
        d="M34 45C34 37.8 39.4 33 46 33C52.6 33 57 37.8 57 45"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M34 12H53C55.2 12 57 13.8 57 16V27C57 29.2 55.2 31 53 31H47L42 36V31H34C31.8 31 30 29.2 30 27V16C30 13.8 31.8 12 34 12Z"
        fill="white"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      <path
        d="M37 19H50"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M37 24H46"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),

  courses: (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M11 16L32 8L53 16L32 24L11 16Z"
        fill="white"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      <path
        d="M18 20V39C18 39 24 47 32 47C40 47 46 39 46 39V20"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      <path
        d="M32 24V43"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M53 16V37"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <circle
        cx="53"
        cy="40"
        r="2.5"
        fill="currentColor"
      />

      <rect
        x="12"
        y="12"
        width="40"
        height="38"
        rx="3"
        stroke="currentColor"
        strokeWidth="2.5"
      />
    </svg>
  ),

  job: (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="10"
        y="17"
        width="44"
        height="32"
        rx="6"
        fill="white"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      <path
        d="M23 17V13C23 10.8 24.8 9 27 9H37C39.2 9 41 10.8 41 13V17"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      <path
        d="M10 30H54"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      <rect
        x="27"
        y="27"
        width="10"
        height="7"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M22 39H42"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M22 44H36"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  ),
};

function ServiceIcon({ type }) {
  return (
    <div className="service-icon-svg">
      {icons[type] || icons.test}
    </div>
  );
}

function ServiceCard({
  title,
  description,
  type,
  color = "purple",
  className = "",
}) {
  return (
    <article
      className={`service-card ${color} ${className}`}
    >
      <ServiceIcon type={type} />

      <div className="service-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default ServiceCard;