import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";
import figlet from "figlet";

let playerGame;

const sleep = (ms = 5000) => new Promise((result) => setTimeout(result, ms));

let welcome = async () => {
  //   const radarTitle = chalkAnimation.radar(`Who wants to be President?
  //   Who Wants to be Billionare?
  //   `);

  const radarTitle = chalkAnimation.rainbow(`Who Wants to be Billionare?`);

  await sleep();
  radarTitle.stop();

  console.info(`${chalk.bgGreenBright("How to play the game?")}
  I AM A PROCESS ON U'R COMPUTER.
  IF U GET ANY Q? WRONG, I WILL BE ${chalk.bgRed("Punch You")}
  SO GET ALL THE Q? RIGHT...


  `);
};

let askName = async () => {
  const answers = await inquirer.prompt({
    name: "player_name",
    type: "input",
    message: "What is you name?",
    default() {
      return "Player";
    },
  });

  playerGame = answers.player_name;
};

let qOne = async () => {
  const answers = await inquirer.prompt({
    name: "question_one",
    type: "list",
    message: "Who President in Indonesia Country in 2023 \n",
    choices: [
      "Soekarno",
      "B.J Habibie",
      "Soeharto",
      "Megawati",
      "Jokowi",
      "Gusdur",
      "Susilo Bambang Y",
    ],
  });

  return handleAnswer((answers.qOne = "Jokowi"));
};

let qTwo = async () => {
  const answers = await inquirer.prompt({
    name: "question_2",
    type: "list",
    message: "What the most Pupular Food in Indonesia \n",
    choices: ["Gudek", "Soto Madura", "Mie Aceh", "Rendang", "Papeda"],
  });

  return handleAnswer((answers.qTwo = "Rendang"));
};

let qThree = async () => {
  const answers = await inquirer.prompt({
    name: "question_3",
    type: "list",
    message: "What the Calculation of 2 x 0 \n",
    choices: ["0", "1", "2", "3", "undefined", "null"],
  });

  return handleAnswer((answers.qThree = "0"));
};

let handleAnswer = async (isCorrect) => {
  const spinner = createSpinner("Checkin the answer....").start();
  await sleep();

  if (isCorrect) {
    spinner.success({ text: `Well Done ${playerGame}. You are Super` });
  } else {
    spinner.error({ text: `Oh no,  Hei ${playerGame} let's try again dude ` });
    process.exit(1);
  }
};

let winner = () => {
  console.clear();
  const msg = `Congrats , ${playerGame} \n $ 1, 000, 000`;

  figlet(msg, (err, data) => {
    console.info(data);
  });
};

await welcome();
await askName();
await qOne();
await qTwo();
await qThree();
winner();
