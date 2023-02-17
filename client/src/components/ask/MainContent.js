import Input from './Input';
import TextEditor from './TextEditor';
import styled from 'styled-components';
import Notice from './Notice';

function MainContent() {
  return (
    <div>
      <h2>Writing a good question</h2>
      <Div>
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
      </Div>
      <Input
        inputTitle="Title"
        inputDesc="Be specific and imagine you’re asking a question to another person."
      />
      <Notice />
      <TextEditor
        editorTitle="What are the details of your problem?"
        editorDesc="Introduce the problem and expand on what you put in the title. Minimum 20 characters."
      />
      <Notice />
      <TextEditor
        editorTitle="What did you try and what were you expecting?"
        editorDesc="Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters."
      />
      <Input
        inputTitle="Tags"
        inputDesc="Add up to 5 tags to describe what your question is about. Start typing to see suggestions."
      />
      <Notice />
      <Input
        inputTitle="Review questions already on Stack Overflow to see if your question is a duplicate."
        inputDesc="Clicking on these questions will open them in a new tab for you to review. Your progress here will be saved so you can come back and continue."
      />
      <Notice />
      <Button>Discard draft</Button>
    </div>
  );
}

const Div = styled.div`
  background-color: hsl(206, 66.7%, 95.3%);
  border-color: 1px solid blue;
`;

const Button = styled.button`
  border: none;
  color: red;
  padding: 5px;
`;

export default MainContent;
