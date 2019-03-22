# shape-app
A small application created as a final project for the Web Apps class at Hanover College.

All work must be in a GitHub repository for the project.
It should be hosted on one group member’s account. It should be private, and your instructor should be given read access.
The other member(s) should be added as collaborator(s).

You must use the issue system provided by GitHub.
Almost all commits must be linked to issues via the “Ref #…” or “close #…” keywords.
Almost all issues must be assigned one or more labels.
You must use milestones to organize the issues into sub-goals.
Issue title and description must sufficiently and succinctly discuss the pertinent problem and the overall plan for addressing it.

Modularize your code.
Your project should be logically broken into smaller modules that are as independent of each other as possible.
Each module should be in its own file.
Modules should be individually testable as much as possible, and mocks/fakes should be used when needed.
Functions/methods within modules should as much as possible have a single purpose.
There should be an index.html file that starts your application. Opening that page in a browser should get everything working.

You must create suitable commits.
Each commit should address a single issue. To the extent possible, refactorings should be done as separate commits.
Small issues should be resolved by no more than 2-3 commits. You may make separate commits with the tests for the issue and with the implementation/solution.
The code should be passing the linter before you make a commit.

Use a linter.
Set up a .eslintrc.json file in your home directory.
You may use the same rules discussed in class, or choose other sets of rules.
Your code files must pass the linter.
You can decide if you want the test files to also pass the linter.

Write tests.
Unit tests should be arranged in a test directory with filenames ending in .spec.js.
Tests should be broken into multiple files, organized in some logical fashion (e.g. one test file per code module).
Tests should be written before the code they address is written.
Tests should be loaded via a tests.html main page.
You may have other files that are used for UI testing.

Write documentation.
Your project should have a README.md file in Markdown format, describing the project and acting as a user’s guide.
A separate architecture.md file should describe the high level architecture of your application. What are the different files/modules, what are their relationships? A graphic is encouraged.
Your project should include a package.json file including at the very least a name, short description, list of collaborators and a link to the repository.


Shapes is an app for drawing simple diagrams. It allows you to add elements to a canvas, change their settings, draw connections and so on. Uses SVG graphics to implement.

Main deliverables

There is a main canvas with configurable dimensions.
The user can pick from a list of “shapes” to add. At the very least, this should include lines, rectangles, ovals, text.
Once a shape type is selected (or an actual shape in the graph is selected), the interface below the canvas should offer customization settings (e.g. line type, color).
There should be a predefined list of colors.
Color/fill/line settings for to-be-created shapes should be remembered from the last shape of that type to be created/edited.
A “new” button would allow the shape to be added, to the graph with some initial settings.
Elements can be dragged around to be repositioned. Or their coordinates can be directly typed.
Dragging starting from a corner should allow resizing (or repositioning of that corner if it is a line).
Dragging starting from a size should allow resizing only in that dimension.
Lines should have the option to turn either end to an arrow.
A list of the created elements is created on the right side. Users can select an existing element by selecting it on that list, or by clicking on it in the canvas.