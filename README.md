Angular Project Installation
============================

1) NodeJS installation
    check: npm -v
           node -v

2) Angular Installation
    npm install -g @angular/cli@15

    check: ng version

3) Create an Angular Application
    -> Open Command Prompt
    -> cd Desktop
    -> ng new my-app
            -> rounting
            ->css

4) Run Angular Application in VS Code
    ng serve
    check: http://localhost:4200

    **) Open powershell as administrator
    **) set-ExecutionPolicy Unrestricted

    


GIT :
=====
    1) Git Install
    2) Create account in GitHub

        git config --global user.name "XXXXXXXX"
        git config --global user.email "XXXXXXX"

        check:
            git config --list

2) project <-> repository

    git init
    git remote add origin XXXXXXXXXXX

    check : git remote -v    

3) Process
===========

    git add .
    changes-> staged changes

    git commit -m "XXXXX"

    git push

    ***) fist time push suggetion command with -f

    pull request-> approve-> merge








    Directives: useful to alter the DOM
    ==========

    1) Structural Directives
        *ngFor, *ngIf

    2) Attribute Directives
        ngClass, ngStyle

    3) Custom Directives
