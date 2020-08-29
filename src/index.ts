import shell from 'shelljs';
import chalk from 'chalk';
import ora from 'ora';
import inquirer from 'inquirer';

const [, , inputName] = process.argv;

if (!inputName) {
  console.error('Please pass one your name.');
  process.exit(1);
}

const msg = `
Hello ! ${inputName} :)
`;

shell.echo('Start !');
shell.mkdir('./tmp');
console.log(chalk.redBright(msg));

inquirer
  .prompt([
    {
      type: 'checkbox',
      name: 'projectType',
      message: 'Select your project type',
      choices: [
        'Hole',
        'Web Server',
        'Docker container',
        'Scaffold',
        'Use redux',
        'Authentication'
      ]
    }
  ])
  .then(({ projectType }: { projectType: string[] }) => {
    const spinner = ora('Customize start your project').start();

    setTimeout(() => {
      spinner.color = 'yellow';
      spinner.text = 'Now Settings';

      spinner.succeed(projectType.toString());

      shell.rm('-rf', './tmp');
    }, 1500);
  });
