export const HamburgHeader = () => {
  return (
    <svg
      fill="none"
      className="h-[1em]"
      viewBox="0 0 20 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h20v2H0V0zm0 6h20v2H0V6zm0 6h20v2H0v-2z" fill="#232323" />
    </svg>
  );
};

export const QuoteLeft = () => {
  return (
    <svg
      fill="none"
      className="h-[1.5em]"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.301 4c.411 0 .699.313.699.663 0 .248-.145.515-.497.702-1.788.948-3.858 4.226-3.858 6.248 3.016-.092 4.326 2.582 4.326 4.258 0 2.007-1.738 4.129-4.308 4.129-3.24 0-4.83-2.547-4.83-5.307C12.833 8.713 19.667 4 21.301 4zM10.468 4c.41 0 .699.313.699.663 0 .248-.145.515-.497.702-1.788.948-3.858 4.226-3.858 6.248 3.016-.092 4.326 2.582 4.326 4.258C11.138 17.878 9.399 20 6.83 20 3.589 20 2 17.453 2 14.693 2 8.713 8.833 4 10.468 4z"
        fill="#6D28D9"
      />
    </svg>
  );
};

export const Facebook = ({h}) => {
  return (
    <svg fill="none" className={h} viewBox="0 0 12 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 8H0v4h3v12h5V12h3.642L12 8H8V6.333C8 5.378 8.192 5 9.115 5H12V0H8.192C4.596 0 3 1.583 3 4.615V8z"
        fill="#fff"
      />
    </svg>
  );
};
export const Google = ({h}) => {
  return (
    <svg viewBox="0 0 48 48" className={h} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path
          id="a"
          d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
        />
      </defs>
      <clipPath id="b">
        <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
      </clipPath>
      <path clipPath="url(#b)" d="M0 37V11l17 13z" fill="#FBBC05" />
      <path
        clipPath="url(#b)"
        d="M0 11l17 13 7-6.1L48 14V0H0z"
        fill="#EA4335"
      />
      <path
        clipPath="url(#b)"
        d="M0 37l30-23 7.9 1L48 0v48H0z"
        fill="#34A853"
      />
      <path clipPath="url(#b)" d="M48 48L17 24l-4-3 35-10z" fill="#4285F4" />
    </svg>
  );
};
