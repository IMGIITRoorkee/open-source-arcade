# First Open Source Contribution

This project aims to simplify and guide the way beginners make their first contribution. If you are looking to make your first contribution, follow the steps below.

<img align="right" width="300" src="https://github.com/IMGIITRoorkee/open-source-arcade/assets/77184239/9d9b85e8-9862-42ae-915f-bb30a20fd056" alt="fork this repository" />

#### If you don't have git on your machine, [install it](https://docs.github.com/en/get-started/quickstart/set-up-git).

## Fork this repository

Fork this repository by clicking on the fork button on the top of this page.
This will create a copy of this repository in your account.

## Clone the repository

<img align="right" width="300" src="https://github.com/IMGIITRoorkee/open-source-arcade/assets/77184239/39d27e42-6890-4aa4-a0ed-06432d2925df" alt="clone this repository" />

Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click the _copy to clipboard_ icon.

Open a terminal and run the following git command:

```bash
git clone URL_COPIED
```

where `URL_COPIED` is the url to this repository (your fork of this project). See the previous steps to obtain the url.

<img align="right" width="300" src="https://github.com/IMGIITRoorkee/open-source-arcade/assets/77184239/05e883f8-1d3c-43ff-900c-c79b59d2a7b7" alt="copy URL to clipboard" />

For example:

```bash
git clone https://github.com/YOUR_USERNAME/open-source-arcade.git
```

where `YOUR_USERNAME` is your GitHub username. Here you're copying the contents of the open-source-arcade repository on GitHub to your computer.

## Create a branch

Change to the repository directory on your computer (if you are not already there):

```bash
cd open-source-arcade
```

Now create a branch using the `git checkout` command:

```bash
git checkout -b your-new-branch-name
```

For example:

```bash
git checkout -d add-inforamtion-management-group
```

## Make necessary changes and commit those changes

Now open `Contributors.md` file in a text editor, add your name to it. Now, save the file.

<img align="right" width="450" src="https://github.com/IMGIITRoorkee/open-source-arcade/assets/77184239/76183527-cf27-4e1b-b4c3-56237852db6c" alt="git status" />

If you go to the project directory and execute the command `git status`, you'll see there are changes.

Add those changes to the branch you just created using the `git add` command:

```bash
git add Contributors.md
```

Now commit those changes using the `git commit` command:

```bash
git commit -m "Add your-name to Contributors list"
```

replacing `your-name` with your name.

## Push changes to GitHub

Push your changes using the command `git push`:

```bash
git push -u origin your-branch-name
```

replacing `your-branch-name` with the name of the branch you created earlier.

<details>
<summary> <strong>If you get any errors while pushing, click here:</strong> </summary>

- ### Authentication Error
     <pre>remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead.
  remote: Please see https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/ for more information.
  fatal: Authentication failed for 'https://github.com/<your-username>/first-contributions.git/'</pre>
  Go to [GitHub's tutorial](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) on generating and configuring an SSH key to your account.

</details>

## Submit your changes for review

If you go to your repository on GitHub, you'll see a `Compare & pull request` button. Click on that button.

<img style="float: right;" src="https://github.com/IMGIITRoorkee/open-source-arcade/assets/77184239/04c5d571-7f06-4df3-9808-fc82f8ad566f" alt="create a pull request" />

Now submit the pull request.

<img style="float: right;" src="https://github.com/IMGIITRoorkee/open-source-arcade/assets/77184239/d6721f53-1bb1-4eb5-aa37-eb82ea217a8f" alt="submit pull request" />

Soon we'll be merging all your changes into the main branch of this project. You will get a notification email once the changes have been merged.

Congrats! You just completed the standard _fork -> clone -> edit -> pull request_ workflow that you'll often encounter as a contributor!
