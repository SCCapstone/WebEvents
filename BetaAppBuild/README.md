# BetaAppBuild

### Quick Reminders to Self
Each time you make changes to the app.tsx file, you must rerun the webpack command.
* Open command prompt on the project file
* Enter node_modules\.bin\webpack app.tsx --config webpack-config.js
* Resolve all errors before continuing

### To Begin Development:
<div>
Fork this repo to create your own branch.
</div>

<div>
Install Visual Studio. During installation when selecting which workloads you will be using
make sure you select Node.js Development. If you forget to do this during initial
installation you can add it later by opening the installer and selecting "Modify".
</div>

<div>
Once in Visual Studio, go into Manage Extensions under the extensions tab. Install the
Github Extension for Visual Studio. This may require you to restart Visual Studio.
</div>

<div>
Under the view tab open up the Team Explorer view and log into github. Under local
Git Repositories, select clone, and input the URL of your branched repo. This should
sync all the files from your brnach to a new local repo.
</div>

<div>
Once this sync is complete, open that repo in team explorer by double clicking on it.
Below the Project dropdown, there should be a Solutions dropdown with BetaAppBuild.sln shown.
If this file is not shown you will need to add it to solutions using the "Open" command
and locating the file in your local repo.
</div>

<div>
Once this is done open the solution by double clicking on it. Now all the files
contained within the solution should be shown in the Solution Explorer window.
</div>

<div>
To push changes:
  * Make a modification to a file and save
  * Under the team explorer window, open the changes tab
  * In the commit message please briefly describe what you did.
  * Select which changes you wish to commit by right clicking and selecting stage.
  * Alternatively you can commit all changes by selecting commit all.
  * Once this completes successfully, go to the syncronization tab and you should see an outgoing commit.
  * Push that commit and the modified files should have been pushed to your branch on github.
  * Once this is done and you are ready for your changes to be put into the master branch open a pull request on github.
  * Once reviewed if it is approved the changes will be saved to the master branch.
</div>