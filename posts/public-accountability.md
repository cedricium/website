---
title: "Public Accountability"
date: "2024-09-10T19:39:37.154Z"
draft: false
excerpt:
  "Doing things is hard. So let's build an API for keeping myself accountable,
  making it publicly accessible."
---

## Stuck in a Rut

As I get older and the responsibilities start to pile up, I occasionally find it
hard to manage all the things I'm supposed to or would like to do. Tack on an
ADHD self-diagnosis combined with anxiety and occasional depression, and it's
not uncommon for things to go unfinished and/or not started.

Since being laid off in the summer of '23, juggling all the things I need to do
like apply to jobs, practice for interviews, study/stay relevant on current
technologies, read, exercise, make time for friends/family, etc. has been
difficult to manage I hate admit. Seems kind of ironic given just how much free
time I have nowadays, but I often find myself stuck or paralyzed by the sheer
number of things I should be doing.

This isn't an uncommon phenomenon, especially for those with neurodivergent
tendencies like myself. It's the perfect storm of analysis paralysis caused by
overchoice or choice overload, often resulting in decision fatigue.

Embarrassingly it took me this long to realize what the root cause and
frustration for my lack of progress has been and I am now tackling the issue
with yet another project in the hopes of improving my daily quality of life.

## How's My Driving?

You ever see a truck or other commercial vehicle with the "How's My Driving?"
decal sticker on it? According to Wikipedia, studies have shown that "vehicles
displaying the decal are involved in 22% fewer accidents and result in a 52%
reduction in accident-related costs." These are effectively public forms of
accountability—by having a phone number to solicit feedback (most likely
negative in the case of harmful/reckless driving), drivers with this sticker
instinctively drive with more caution, likely out of fear of warnings or being
reprimanded.

A similar accountability system is a status page used for uptime accountability
(what originally inspired this project idea).

They're both interesting concepts, and I think the public accountability
principle could work for myself with regards to doing the things I ought to do.

The goal would be to share some metric of my current status/progress. This
status would be broken into a few categories:

- 🟢 (green): good/on track/doing the things I need to do
- 🟡 (yellow): okay/falling behind/not doing everything I should be
- 🔴 (red): poor/off track/slacking, not doing anything I ought to be

By sharing this publicly, the hope is that it will light a fire under me to want
to keep this metric green in order to avoid any feelings of guilt or shame
should it turn yellow or red.

## Progress

Haven't quite landed on a name for this project yet, but I'm leaning towards
something along the lines of "progress" or "life status". By the time you're
reading this, it should already be live and implemented here on my website—look
for the indicator badge in the footer at the bottom of this page; hopefully it's
green!

Link to GitHub repository:
[https://github.com/cedricium/lifestatus](https://github.com/cedricium/lifestatus)

### How it Works

Being a serial procrastinator and often faced by the
[Hydra Project Effect](https://www.bytedrum.com/posts/art-of-finishing/), I
wanted to do things a little bit differently this time around (namely actually
build and _ship_ a working project).

With the goal of shipping in mind, I kept the scope of the project limited on
purpose, selecting only the most crucial objectives to focus on that would meet
my needs for an MVP. Taking a sort of system design approach, I defined the
functional requirements:

- Users should be able to add monitors, tracking goals with a defined frequency
  and cadence.
- Users should be able to view the status of individual monitors.
- Users should be able to record updates for monitors.
- Users should be able to see the overall aggregate status of all monitors.

Future enhancements/out-of-scope requirements would be things like:

- Users should be able to be notified via the public if aggregate status is not
  in good standing.
- Users should be able to see the historical status of each monitor for up to
  the past 90 days.
- Users should be able to see recent update activity (e.g. over the last 24
  hours, max 10 updates).

> Note: the objectives listed state "users", but I quickly decided to not even
> implement any sort of auth(n|z) for the sake of time.

With these requirements in mind, I next thought about what core entities a
system like this would have, which essentially boiled down to two models:

- `Monitor`
- `Update`

A `Monitor` is responsible for tracking the task/goal/"thing to be done". It
would have fields like `title` and `description`, but more importantly a
`period`: how often should the goal task/goal be repeated; and `frequency`: how
many times within the given period should the task be completed to be in
good/green standing.

To record monitors' progress, we use an `Update`. For now, this simply captures
the `timestamp` when the update was made, as well as any `notes` associated with
this most recent update (linked to its parent `Monitor` via a `monitor_id`
foreign key). For example, say we have a monitor for "Reading Daily" with a
period of 24 hours and a frequency of 2 (i.e. need to read at least twice within
24 hours to be in good standing). An update when submitted would capture the
datetime of the submission and notes like "read x article from Hacker News".

<!-- ```sh
# List monitors:
GET /v1/monitors —> Monitor[] & StatusRange[]
```

```sh
# Get aggregate monitor status:
GET /v1/monitors/status —> Status & StatusRange[]
```

```sh
# Create a monitor:
POST /v1/monitors —> Monitor
```

```sh
# Record monitor update:
POST /v1/monitors/:monitorId/updates —> Update
``` -->

Using this relational setup, we can calculate individual monitors' statuses by
looking at the current date and comparing that to recent updates' timestamps. If
some or more match the given period/frequency, we're good (labeled as "Making
Progress"). Otherwise, we then need to look at the most recent update recorded
and determine how many updates were made since the previous period. Should that
satisfy the period/frequency criteria, then we mark our progress as okay
("Refocusing"). Finally, should no recent updates fall in the two most recent
periods, we set our status as poor ("Unfocused"). Using the status of individual
monitors, we can calculate a running average of all active monitors' statuses:
that's what's displayed in the indicator badge below.

This data modeling is backed by an Express.js RESTful API written in TypeScript
and deployed on a Raspberry Pi 3 using Docker and SQLite. I'm using Cloudflare
Tunnel to enable a secure connection between the API on the Pi and Cloudflare's
global network, thus making the web service accessible without needing to manage
port forwarding, firewall rules, and potentially dynamic IP setup on my home
network. I particularly like this set up because it costs nothing to host
(granted I already had a unused domain to be used for Cloudflare
tunneling)—though I may need to upgrade to a newer Pi should I want to add other
services in the future.

There are plans for further expanding upon this status system. Right now a 0
status denotes a newly-created monitor, but I'd also like to add the ability to
pause monitors/take scheduled breaks and disable/discontinue a monitor (-1
status perhaps). I also originally envisioned automatic updates using things
like webhooks or IFTTT/Zapier. Now that I've explained this system in writing,
even the terminology is a bit confusing, so the domain naming could be updated
as well.

Depending on how this little experiment goes for myself, I'm curious what others
think of it and how effective it would be for others. Similar to how many folks
have the "/now" page on their sites, it'd be interesting to see a "/progress" or
"/status" page become a thing and a way to check-in in order to encourage
healthier habits and connecting with others.
