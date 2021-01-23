1. In Firefox’s address bar, type `about:profiles`.
2. Click the button at the end of the entry for `Root Directory` to open the root directory in your machine’s Finder/Explorer.
3. Open the highlighted folder, then create a new folder called `chrome`.
4. Create a file called `userContent.css` _inside_ the new `chrome` folder. (Consider putting the `chrome` folder under Git control.)
5. Visit `about:config`.
6. Search for `toolkit.legacyUserProfileCustomizations.stylesheets`, then click the `⇌` icon.
7. Restart Firefox.

**Note**: Any changes to `userContent.css` won’t take effect until you restart Firefox.
