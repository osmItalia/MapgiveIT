MapgiveIT
=========

# English
A brief English description can be found at the bottom of this file.

# Italiano
Questo repository contiene la versione in lingua italiana, tradotta ed
adattata, del sito [Mapgive](http://mapgive.state.gov) installata qui
[http://mapgive.openstreetmap.it](http://mapgive.openstreetmap.it)

## Attribuzione
Mapgive è un progetto della Humanitarian Information Unit (HIU) del
Dipartimento di Stato degli Stati Uniti d'America.

Il codice sorgente per il sito originale è disponibile sul 
[repository Mapgive su Github](https://github.com/state-hiu/Mapgive).

È possibile leggere le informazioni di copyright per il sito originale a
[questo link](http://www.state.gov/misc/87529.htm#copyright)] (in inglese)

### Autori
La traduzione di MapgiveIT è stata effettuata da:
* Cristian Consonni, Fondazione Bruno Kessler, Trento (TN) - Italy
* Simone Cortesi
* Stefano Sabatini
* Maurizio Napolitano, Fondazione Bruno Kessler, Trento (TN) - Italy
* Leonardo Frassetto
* Giovanni Cascafico
* Alessandro Palmas
* Simone F. (Groppo)

Un ringraziamento va anche a tutti coloro i quali hanno segnalato errori e
refusi e in particolare alla lista
[talk-it](https://lists.openstreetmap.org/listinfo/talk-it)
di OpenStreetMap ed alla Humanitarian Information Unit (HIU) del Dipartimento
di Stato degli Stati Uniti per il supporto fornito durante la traduzione.

## Istruzioni per lo sviluppo, la traduzione e la localizzazione
Se volete partecipare al miglioramento del sito potete 
[forkare](https://github.com/osmItalia/MapgiveIT/fork) 
questo repository e mandare una 
[pull request](https://help.github.com/articles/using-pull-requests).

Di seguito troverete alcune informazioni utili.

### Jekyll + Grunt
Il sito è costruito usando [Jekyll](http://jekyllrb.com) e
[Grunt](http://gruntjs.com/).

Le seguenti versioni permettono di costruire una build funzionante del sito:
* `ruby` v2.1.0
* `jekyll` v1.5.1
* `nodejs` v0.10.15
* `grunt-cli` v0.1.13
* `grunt` v0.4.4
* `OptiPNG` v0.7.5
* `jpegtran` v1.2.0

Per installare Jekyll è necessario avere un'ambiente di sviluppo Ruby sulla
propria macchina, in particolare si consiglia di installare RVM (_Ruby
Version Manager_).
Seguite queste istruzioni per 
[installare RVM su Ubuntu](http://ryanbigg.com/2010/12/ubuntu-ruby-rvm-rails-and-you/) 
e se aveste bisogno di approfondore potrete trovare ulteriori info su 
[rvm.io](http://rvm.io/).

Quando avrete completato l'installazione di RVM potete installare Jekyll con: 

```
gem install jekyll
```

Per installare Grunt avrete bisogno di [Node.js](http://nodejs.org) e 
[npm](https://www.npmjs.org/) che possono essere installati su Ubuntu
attraverso `apt-get`.

*Attenzione*: la versione di Node.js installata su versioni precedenti di
Ubuntu (e.g. 12.04 LTS server) è troppo vecchia per  poter essere usata, è
necessario avere una versione di Node.js >= 0.8.0.
Se la vostra versione è troppo vecchia rimuovetela (con
`apt-get purge --remove nodejs`) e installate Node.js seguendo
[queste istruzioni](https://ariejan.net/2011/10/24/installing-node-js-and-npm-on-ubuntu-debian/).

Quindi è possibile installare tutti i moduli richiesti con il seguente
comando.
```
npm install
```
Infine create una cartella per ospitare i backup del sito (verrà ignorata da
git):
```
mkdir backup
```
*Importante*: nel caso ci si dimentichi di creare la cartella si riscontrerà
un errore nell'esecuzione di Grunt simile al seguente:

```
Running "backupSite" task
Warning: ENOENT, no such file or directory 'backups/201464192549' Use --force to continue.

Aborted due to warnings.
```

per risolverlo basta creare la cartella `backup` nella radice del repository.

### Dipendenze
Per potere eseguire i vari task di Grunt è necessario avere installato:
`OptiPNG` e `jpegtran`.

#### Installare OptiPNG
La versione di OptiPNG presente nei repository di Ubuntu 13.10 non supporta
un'opzione necessaria alla costruzione del sito.

È possibile scaricare la versione minima richiesta, v0.7.5, di OptiPNG dal sito
del [progetto su Sourceforge](http://optipng.sourceforge.net/).

Dopodicché è possibile installare il programma con:

```
./configure
make
sudo make install
```

#### Installare jpegtran
È possibile installare `jpegtran` con il comando

```
install libjpeg-progs
```

### build.sh

Una volta installati quanto descritto sopra è possibile costruire il sito 
usando lo script `build.sh`:

```
./build.sh
```

Il sito verrà creato nella cartella `_site`, potete copiare quella cartella
e servirla con il vostro webserver preferito.

Se volete testare le pagine, Jekyll mette a disposizione un comodo server di
sviluppo attivabile lanciando, dalla radice del repository il seguente comando:

```
jekyll serve
```

### clean.sh 
Lo script `clean.sh` rimuove le cartelle `assets` (temporanea) e `_site`:

```
./clean.sh
```

# English
This repository contains the Italian translation and localization of 
the [Mapgive](http://mapgive.state.gov) website.

## Credits
Mapgive is a project by the Humanitarian Information Unit (HIU)
of the Department of State of the United States of America.

The source code for the original website is available on the
[Mapgive repository on Github](https://github.com/state-hiu/Mapgive).

Read the [copyright info](http://www.state.gov/misc/87529.htm#copyright) for 
the original website.

### Authors
The following people have contributed to MapgiveIT:
* Cristian Consonni, Fondazione Bruno Kessler, Trento (TN) - Italy
* Simone Cortesi
* Stefano Sabatini
* Maurizio Napolitano, Fondazione Bruno Kessler, Trento (TN) - Italy
* Leonardo Frassetto
* Giovanni Cascafico
* Alessandro Palmas
* Simone F. (Groppo)

A special thank goes to everybody who contributed reporting bugs and misprints
and in particular to the
[talk-it](https://lists.openstreetmap.org/listinfo/talk-it)
OpenStreetMap mailing list and to the Humanitarian Information Unit of the
State Department of the United States of America for the assistance provided
with the translation.

## Development, localization and internationalization instructions
To participate in the development of the MapgiveIT website you can
[fork](https://github.com/osmItalia/MapgiveIT/fork)
this repo and send a
[pull request](https://help.github.com/articles/using-pull-requests).

You can find below some useful information.

### Jekyll + Grunt
The website is built using [Jekyll](http://jekyllrb.com) and
[Grunt](http://gruntjs.com/).

The following software at the given versions allow to build a working version
of the website:
* `ruby` v2.1.0
* `jekyll` v1.5.1
* `nodejs` v0.10.15
* `grunt-cli` v0.1.13
* `grunt` v0.4.4
* `OptiPNG` v0.7.5
* `jpegtran` v1.2.0

To install Jekyll a Ruby you'll need to have a working Ruby development
environment on your workstation. This is provided installing RVM (_Ruby
Version Manager_).
Please follow these instructions to
[install RVM on Ubuntu](http://ryanbigg.com/2010/12/ubuntu-ruby-rvm-rails-and-you/)
if you need more info you can visit the site [rvm.io](http://rvm.io/).

Upon completing the installation of RVM you can install Jekyll with:

```
gem install jekyll
```

To install Grunt you need [Node.js](http://nodejs.org) and
[npm](https://www.npmjs.org/) that can be installed on Ubuntu system using the
`apt-get` package manager.

*Warning*: the Node.js version which is shipped with the previous releases of
Ubuntu (e.g. 12.04 LTS server) is too old, you need a version of
Node.js >= 0.8.0.
If you have already installed an old version of Node.js you can remove it
(with `apt-get purge --remove nodejs`) and install a newer version following
[these instructions](https://ariejan.net/2011/10/24/installing-node-js-and-npm-on-ubuntu-debian/).

Once you have Node.js and npm you can install all the requested modules with
the following command:
```
npm install
```
Create a directory to host the backups for the website (it will be ignore by
git):
```
mkdir backup
```
*Important*: if you forget to create the directory you will receive an error
like this when executing Grunt:

```
Running "backupSite" task
Warning: ENOENT, no such file or directory 'backups/201464192549' Use --force to continue.

Aborted due to warnings.
```

to solve it just create the `backup` directory in the repository root.

### Dependencies
To execute all the Grunt task you need to have the following two software
installed in your system: `OptiPNG` and `jpegtran`.

#### Installing OptiPNG
The OptiPNG version available in the Ubuntu 13.10 repositories does not
support an option which is needed to build the site.

You can download and install the minimum required version, v0.7.5, of OptiPNG
from the [project site on Sourceforge](http://optipng.sourceforge.net/).

You can install it with:

```
./configure
make
sudo make install
```

#### Installing jpegtran
You can install `jpegtran` with

```
install libjpeg-progs
```

### build.sh

This repo contains a simple script, `build.sh`, to build the site:

```
./build.sh
```

The website will be build in the `_site` directory, you can then copy this
folder and serve it using your favorite webserver.

If you want to test the pages, Jekyll provides a simple development webserver
which can be activated launching the following command from the repo root:

```
jekyll serve
```

### clean.sh
The script `clean.sh` removes the `assets` (temporary) and `_site` directories.
Launch it with:

```
./clean.sh
```
