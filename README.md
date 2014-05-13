MapgiveIT
=========

# English
Brief english text can be found at the bottom of this file.

# Italiano
Questo repository contiene la versione in lingua italiana, tradotta ed 
adattata, del sito [Mapgive](http://mapgive.state.gov) installata qui http://mapgive.openstreetmap.it

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
* Maurizio Napolitano
* Leonardo Frassetto
* Giovanni Casafico
* Alessaandro (Zena)

## Istruzioni per lo sviluppo
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
propria macchina, in particolare si consiglia di installare RVM.
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
necessario avere una versione di Node >= 0..8.0.
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

### Dipendenze
Per potere eseguire i vari task di Grunt è necessario avere installato:
`OptiPNG` e `jpegtran`.

#### Installare OptiPNG
La versione di OptiPNG presente nei repository di Ubuntu non supporta
un'opzione necessaria alla costruzione del sito.

È possibile scaricare la vv0.7.5 du OptiPNG dal sito del
[progetto su Sourceforge](http://optipng.sourceforge.net/)

Dopodicché è possibile installare il programma con:

```
./configure
make
sudo make install
```

#### Installare jpegtran
È possibile install `jpegtran` con il comando

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
* Maurizio Napolitano
* Leonardo Frassetto
* Giovanni Casafico
* Alessaandro (Zena)

