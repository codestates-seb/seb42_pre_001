import MainContent from '../components/MainContent';
import Sidebar from '../components/Sidebar';

function Questions() {
  return (
    <>
      <h1>Ask a public question</h1>
      <div>
        <h2>Writing a good question</h2>
        <p>
          You’re ready to ask a programming-related question and this form will
          help guide you through the process. Looking to ask a non-programming
          question? See the topics here to find a relevant site.
        </p>
        <h5>Steps</h5>
        <ul>
          <li>Summarize your problem in a one-line title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what you tried and what you expected to happen.</li>
          <li>
            Add “tags” which help surface your question to members of the
            community.
          </li>
          <li>Review your question and post it to the site.</li>
        </ul>
      </div>
      <MainContent />
      <Sidebar />
    </>
  );
}

export default Questions;
