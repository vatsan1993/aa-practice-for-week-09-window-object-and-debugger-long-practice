export function changeTitle() {
  // Change the title of the page to "(Your name)'s Portfolio"
  // Your code here
  document.title = `Sriavatsan's portfolio`;
}

export function changeHeader() {
  // Change the name in the h1 of the page to your name
  // Your code here
  let header = document.querySelector('#header');
  header.children[0].textContent = 'I am Sozhavaram Srivatsan';
}

export function changeAboutMe() {
  /* Update the first paragraph in the About Me section with a small
     passage about yourself */
  // Your code here
  let section = document.querySelector('.section');

  section.children[1].textContent =
    "Hello, I'm Srivatsan, a passionate and dedicated Full Stack Developer with a strong background in designing and implementing dynamic, user-friendly web applications. With extensive experience in both front-end and back-end technologies, I thrive on transforming complex problems into efficient, scalable solutions. My expertise spans across various programming languages and frameworks, enabling me to adapt quickly to new projects and continuously deliver high-quality results.";
  section.children[2].textContent =
    "Over the years, I have collaborated with cross-functional teams to develop innovative products that enhance user experiences and drive business growth. I am committed to staying updated with the latest industry trends and best practices, which allows me to incorporate modern and effective techniques into my work. Beyond coding, I value clear communication and teamwork, believing that the best solutions emerge from collaborative efforts and diverse perspectives. I'm excited to contribute my skills and enthusiasm to create impactful digital experiences.";
}
