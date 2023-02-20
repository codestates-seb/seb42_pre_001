const mainNotice = {
  title: 'Writing a good question',
  desc: [
    'You’re ready to ask a programming-related question and this form will help guide you through the process.',
    'Looking to ask a non-programming question? See the topics here to find a relevant site.',
  ],
  stepsDetail: [
    'Summarize your problem in a one-line title.',
    'Describe your problem in more detail.',
    'Describe what you tried and what you expected to happen.',
    'Add “tags” which help surface your question to members of the community.',
    'Review your question and post it to the site.',
  ],
};

const ask = {
  title: 'Title',
  desc: 'Be specific and imagine you’re asking a question to another person.',
  noticeTitle: 'Writing a good title',
  noticeDesc: [
    'Your title should summarize the problem.',
    'You might find that you have a better idea of your title after writing out the rest of the question.',
  ],
};

const problem = {
  title: 'What are the details of your problem?',
  desc: 'Introduce the problem and expand on what you put in the title. Minimum 20 characters.',
  noticeTitle: 'Introduce the problem',
  noticeDesc: [
    'Explain how you encountered the problem you’re trying to solve, and any difficulties that have prevented you from solving it yourself.',
  ],
};

const tryAndExpect = {
  title: 'What did you try and what were you expecting?',
  desc: 'Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters.',
  noticeTitle: 'Expand on the problem',
  noticeDesc: [
    'Show what you’ve tried, tell us what happened, and why it didn’t meet your needs.',
    'Not all questions benefit from including code, but if your problem is better understood with code you’ve written, you should include a minimal, reproducible example.',
    'Please make sure to post code and errors as text directly to the question (and not as images), and format them appropriately.',
  ],
};

const tags = {
  title: 'Tags',
  desc: 'Add up to 5 tags to describe what your question is about. Start typing to see suggestions.',
  noticeTitle: 'Adding tags',
  noticeDesc: [
    'Tags help ensure that your question will get attention from the right people.',
    'Tag things in more than one way so people can find them more easily. Add tags for product lines, projects, teams, and the specific technologies or languages used.',
    'Learn more about tagging',
  ],
};

const review = {
  title:
    'Review questions already on Stack Overflow to see if your question is a duplicate.',
  desc: 'Clicking on these questions will open them in a new tab for you to review. Your progress here will be saved so you can come back and continue.',
  noticeTitle: 'Make sure we don’t already have an answer for your question',
  noticeDesc: [
    'Stack Overflow is a huge database of knowledge.',
    'Please make sure your question isn’t already answered before posting, or your question might be closed as a duplicate.',
  ],
};

const body = {
  title: 'Body',
  desc: 'The body of your question contains your problem details and results. Minimum 30 characters.',
  noticeTitle: 'Proof-read before posting',
  noticeDesc: [
    'Now that you’re ready to post your question, read through it from start to finish. Does it make sense?',
    'Add any details you missed and read through it again. Now is a good time to make sure that your title still describes the problem!',
  ],
};

export { mainNotice, ask, problem, tryAndExpect, tags, review, body };
