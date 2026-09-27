# Teaching and lesson-writing principles

Apply these instructions when creating or updating lessons, exercises, starter
files, demonstrations, prototypes and solutions.

The teaching approach builds understanding through concrete situations,
carefully ordered discoveries, controlled comparisons and repeated
experimentation. Each new concept grows out of something already observed,
attempted or understood. The progression should make the reason for learning
a mechanism apparent.

Examples below illustrate this approach. Adapt their subject matter to the
course while preserving the teaching principles.

## 1. Preserve the intended progression

- Read the surrounding lessons and exercise files before making changes.
  Identify what has already been taught, what the current activity introduces
  and what belongs to a later activity.
- Treat the order of activities, examples, discoveries and explanations as
  deliberate. Preserve their dependencies when editing.
- Build each step from established knowledge. Make the connection to earlier
  work explicit where it helps understanding.
- Revisit concepts in different situations. A condition encountered in a
  clock can later govern an interactive element or a game.
- Reuse familiar projects, vocabulary and code where possible. A new activity
  should not require rebuilding the entire context before learning can begin.
- Resume unfinished challenges when they provide a useful starting point
  for the next lesson.
- Keep optional extensions independent of the prerequisites needed later.

## 2. Begin with something concrete

- Start from an observable situation: an unexpected display, an interaction,
  a recognisable rule, a short sequence or a reproducible problem.
- Establish what currently happens before asking for a change.
- Describe the expected behaviour in terms that can be observed.
- Let manipulation and observation give meaning to technical explanations.
  Introduce terminology when it helps describe something encountered.
- When useful, express a rule in ordinary language before translating it
  into code.
- Connect concepts and algorithms to their implementation and then to the
  behaviour of an application or interface.

A page whose text appears absent can lead to inspecting its structure and
colours. A clock displaying `13:60` can create the need for a condition.

## 3. Make new mechanisms answer a real need

- Let an existing approach reveal the problem that a new concept solves.
- Introduce functions after repeated operations make their usefulness visible.
- Introduce parameters after comparing what stays constant and what changes.
- Introduce tools through a concrete difficulty they help resolve, such as
  conserving related files together or recovering an earlier working version.
- Teach underlying mechanisms before relying on libraries or frameworks
  that package them.
- Preserve useful intermediate repetition. It may be the evidence needed
  to motivate a later abstraction.
- Keep the scope proportionate to the learning objective. Additional features,
  configuration and architecture must have a teaching purpose.

## 4. Control the size of each step

- Keep familiar elements stable while introducing a new difficulty.
- Change one significant dimension at a time when the comparison depends
  on identifying cause and effect.
- Separate reasoning tasks that can be learned independently: calculate a
  value, correct a boundary condition, then prepare its display.
- Provide the supporting files and mechanisms that fall outside the current
  learning objective.
- Explain supplied code sufficiently for the intended work, without requiring
  mastery of every underlying feature at once.
- Distinguish clearly between code that is provided, code to complete and
  code to write independently.
- Increase difficulty through reasoning and responsibility, while keeping
  setup and file handling explicit.

A sequence can first paint a fixed pattern, then use a function, then reveal
its execution through delays, then respond to user actions.

## 5. Use comparison to build understanding

- Compare examples that isolate a meaningful difference.
- Identify invariants and variants before introducing a reusable operation.
- Use equivalent representations to separate a value from its notation.
- Use an unchanged visible result to examine a change in implementation.
- Use the same instructions in a different order to expose the importance
  of execution.
- Compare expected and actual results, including situations where the first
  explanation proves incomplete.
- Explain which conclusion a comparison supports.

A contour can remain identical after repeated instructions are replaced by
function calls. The same contour can also appear through different animations
when the instruction order changes.

## 6. Build a habit of prediction, observation and explanation

Use the following pattern where it serves the activity:

1. Establish the starting state.
2. Describe or predict the expected result.
3. Choose an action or modification.
4. Execute it and observe the result.
5. Compare the observation with the expectation.
6. Explain any discrepancy.
7. Adjust the program or the explanation, then try again.

- Use the interface, console, inspector, files and history as sources of
  evidence.
- Ask for observations precise enough to support a conclusion.
- Make reset conditions explicit: reloading, restoring starting values or
  beginning from a particular version.
- Distinguish sequences that continue from the preceding state from trials
  that restart.
- Require an explanation of why a change works alongside the visible result.

## 7. Treat errors as material for reasoning

- Give errors a clear role in the progression.
- Reproduce a problem before modifying its cause.
- Distinguish different kinds of failure when relevant: syntax, references,
  logic, execution order, representation or file organisation.
- Use error messages as clues that can be read and investigated.
- Let a new case expose the limits of an initially successful solution.
- Keep deliberately introduced faults focused enough for their intended
  cause to be investigated.
- Preserve intentional errors and incomplete code in starter materials.
  Correcting them prematurely can remove the exercise.
- Present unexpected results as opportunities to inspect assumptions and
  execution.
- When several solutions work, explain why a particular one is preferred.

An instruction can be correct but placed too early or too late. A recently
saved version can contain an error while an older version still works.

## 8. Make execution, state and representation explicit

- Follow the values available at the moment each instruction executes.
- Explain which action changes state and which action reads or displays it.
- Show that a later modification does not retroactively update an earlier
  calculation or a previously constructed text.
- Distinguish a value from its textual or visual representation.
- Distinguish an element's individual state from the state of other elements.
- Distinguish temporary changes in a running page from changes saved in files.
- Distinguish a working file, a recorded version and a published copy.
- Introduce separation of responsibilities through observable consequences:
  where a change belongs, what it affects and what must remain consistent.

For example, numeric minutes can remain available for calculation while a
separate value prepares their two-digit display.

## 9. Remove plausible misconceptions

- Use precise language to explain what causes a behaviour.
- Distinguish a function's definition, its reference and its execution.
- Explain where arguments come from and what a parameter receives.
- Make clear that a descriptive name helps the reader; it does not determine
  the value or behaviour supplied by the runtime.
- Distinguish an operation from its result and a calculation from storing
  that result.
- Distinguish the existence of a rule from the conditions under which it
  applies.
- State the assumptions that make a simplified solution valid.
- Keep analogies tied to the mechanism they explain and identify their
  limits when necessary.

A parameter named `event` receives an event because of the caller. Defining
a function named `peindre` does not paint anything until the function runs.

## 10. Use language, recognition and discovery deliberately

- Build bridges between familiar experiences and unfamiliar notation.
- Use decomposition to make an expression understandable, then show how
  known parts combine into a meaningful whole.
- A name or word can support a mnemonic, but distinguish that mnemonic from
  a technical explanation or a historical claim.
- Preserve discoveries whose effect depends on the order of presentation.
  Do not reveal the explanation before the observation that gives it meaning.
- Use delayed revelations or expandable explanations when they serve the
  activity.
- Playful titles, surprising examples and moments of recognition can invite
  curiosity. Technical explanations must remain exact.
- Choose names that communicate purpose and help explain the program.

An unfamiliar grouping of numbers can become a recognisable clock once a
separator is introduced.

## 11. Increase autonomy while keeping support available

- Move progressively from observation and guided manipulation to completing,
  repairing, adapting and independently implementing behaviour.
- Provide models that can be reused in a new situation.
- Make hints local to the difficulty they address.
- Use expandable hints and reference material when immediate display would
  reveal too much.
- Keep complete solutions out of starter files when producing the solution
  is the learning task.
- A recap may show code already constructed together without resolving the
  next independent challenge.
- Allow experimentation with choices such as appearance, arrangement,
  sequence or behaviour.
- Ground creative experiments in a working starting point and a describable
  intended effect.
- Allow an unexpected result to lead to a new experiment after it has been
  examined and understood.

## 12. Define success through evidence

- Give each substantial task an observable expected result.
- Include verification cases that exercise the concept being learned.
- Use ordinary cases, boundaries, repeated actions and combinations where
  they reveal different possible mistakes.
- Check that new behaviour preserves relevant earlier behaviour.
- For interactions involving several elements, include cases that establish
  whether their states remain independent.
- For coordinated output, check that its parts describe the same state:
  image, text, appearance and alternative text where relevant.
- Pair successful behaviour with an explanation of the mechanism.
- End a sequence with a concise consolidation of concepts already encountered.

Verification instructions belong in the teaching material. The user handles
execution and testing: never launch a headless browser or create or run
automated tests, including temporary test scripts. Report only verification
that actually took place.

## 13. Organise documents around the activity

- Start session documents with the first activity immediately after the title.
- Do not add introductory summaries of the teaching progression, total
  durations, timed agendas, “Déroulement” tables or opening notes about
  common paths and optional extensions.
- Keep explanations about an activity in the relevant section.
- Use session documents to carry the course sequence. When separate exercise
  sheets exist, place detailed manipulations, local explanations, files and
  verification cases there.
- Make the starting files, files to create and files to modify unambiguous.
- Explain which file or page is active when several versions coexist.
- Distinguish instructions to enter from output to observe.
- Identify placeholders and explain how to replace them.
- Place explanations and hints near the step that needs them.
- Keep teacher preparation separate from the learner's discovery sequence.
- Do not include visible teaching time allocations in headings, prose or
  tables. Durations that belong to the subject matter, such as animation
  delays, remain relevant.

These principles guide the construction of activities; they do not require
every exercise to use an identical set of headings.

## 14. Write French educational material descriptively

- Use “on” for actions and describe events and observable effects directly.
- Vary sentence subjects naturally instead of beginning every sentence
  with “on”.
- Never address students directly. Avoid “tu”, “vous”, their possessive forms,
  second-person imperatives and equivalent English forms.
- Avoid “nous”, first-person plural imperatives and possessives such as
  “notre” or “nos”.
- Prefer concrete references: “le fichier”, “la case cliquée”, “la couleur
  choisie”, “le résultat attendu”.
- Use short, connected explanations that relate an action to its effect.
- Introduce technical vocabulary with the mechanism it names.
- Make instructions precise about the object, action and expected observation.

Example: “On clique sur l’image : l’ampoule s’allume. Un deuxième clic
l’éteint.”

## 15. Keep code and naming aligned with the lesson

- Choose descriptive names that express purpose.
- Never use generic filenames such as `script.js`, `style.css`, `css.css`
  or similarly vague names.
- Keep names consistent across prose, code, links and supplied files.
- Do not define a function solely to call it once.
- Do not introduce a `main()` wrapper.
- Introduce reusable functions when repeated operations or behaviours
  justify them.
- Prefer code whose execution can be followed with the knowledge established
  at that point.
- Preserve deliberate intermediate implementations until the lesson has
  established the reason to change them.
- Name exercise and project repositories `labo-<project-name>`.
- Repository names use lowercase letters, no accents and hyphens between
  words. The `labo-` prefix does not depend on the class, course or lesson.
- Choose a project name that describes the project, such as `labo-ampoule`,
  `labo-pixelator` or `labo-pierre-papier-ciseaux`.

## 16. Review changes against the teaching intent

Before considering a lesson change complete, review the material and ask:

- Does each step build on knowledge or evidence already available?
- Is the reason for each new concept understandable?
- Is the amount of new material controlled?
- Do comparisons isolate the intended difference?
- Are execution order, state and representation described accurately?
- Are deliberate discoveries and incomplete exercises preserved?
- Are the expected results observable and the verification cases meaningful?
- Does the activity develop explanation and autonomy as well as execution?
- Do the prose, code, files and links describe the same progression?
- Are the writing, naming and production rules respected?

Preserve the teaching mechanism when adapting an example. Changing its
subject, appearance or implementation must retain the observations,
comparisons and reasoning that make it useful.
