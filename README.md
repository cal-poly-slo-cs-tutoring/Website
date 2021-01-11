# The CS Tutoring Website
This repo has the source and related resources for the
Cal Poly CS tutoring website.

## Base Template
The base template was pulled from [here](https://warc.calpoly.edu/).

## The Server
At the time of writing, the server lives at `54.71.224.129` (an Elastic IP from
AWS that should not change), and should (soon) be at 
http://tutoring.csc.calpoly.edu. It is an Ubuntu 18 AWS instance. I (Jasper) 
have set up Apache on there, but we can realistically set up anything we want.
Make sure to stay up to date on best security policies.

To add more users, I recommend using SSH key-only (no password) accounts.
This is done with:

```bash
sudo adduser $USER --disabled-password
sudo adduser $USER admin # If they should get sudo access
```

And then adding their SSH pubic key to the new user's `~/.ssh/authorized_keys`
file. Make sure to remove users/change logins as necessary to keep it locked
down.

### Important Directories
Most of the Apache stuff was left as is, and there's plenty of docs on the web
on how to manage Apache (although make sure to read a few different sources
before tweaking stuff).

Content Root: `/var/www/tutoring/`

SSL Stuff (do NOT make publicly accessible!): `/etc/ssl/private`

## The Website
I (Jasper) largely just modified the provided templates from WARC by hand. They
seem to have some kind of templating support, but I didn't look into it much.
Main things to look out for are keeping the header links and other page-to-page
shared content consistent.

The "Skip to Content" link expects a `id=topH1` somewhere to mark the start of
content.

## Deployments
Deployments are done via [DeployHQ](https://cal-poly-csse-tutoring-center.deployhq.com/) and are automatically triggered when you push to `mainline`. Keep in mind we're limited to 10 per day, and see the Google Drive folder in the Slack for more information.
