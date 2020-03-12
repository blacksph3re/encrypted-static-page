# Encrypted Static Page

For a theater project, we have a static hosting (because of cheap), but want to publish our internal newsletter there. Thus I drafted this gulp task that encrypts a page and wraps it into a wrapper. The resulting file is safe to be uploaded into the wild under following considerations:

* Choose a [strong password](https://howsecureismypassword.net/)!
* Use a different password for each file you encrypt
* Remove the file from the internet when it's no longer needed - even the safest password can leak
 


## Usage

Clone the repo and install dependencies

```
git clone https://github.com/blacksph3re/encrypted-static-page.git
cd encrypted-static-page
npm install
```

Change the password in gulpfile.js (currently 'lol') to something slightly stronger.

Replace the website in page/ with your own page

Then run
```
npx gulp
```

You will end up with a single index.html in the dist file. That index.html will prompt you to enter the password and then display the decrypted version.