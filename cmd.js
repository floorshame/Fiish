document.getElementById('command-bar').style.display = 'none';

const cmdbardiv = document.getElementById('command-bar');
const cmdbarinp = document.getElementById('cmd-bar-input');
/*
document.addEventListener("keydown", function(event) {
  if (event.which == 191) { 
      event.preventDefault();
      commandbar();
  }
}, false);
*/
function commandbar() {

  cmdbardiv.style.display = '';
  cmdbarinp.value = '';
  cmdbarinp.focus();

}

document.addEventListener('click', function handleClickOutsideBox(event) {
  if (!cmdbardiv.contains(event.target)) {
    cmdbardiv.style.display = 'none';
    cmdbarinp.value = '';

  }
});

cmdbarinp.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
      cmdansw(e);
    }
});

function cmdansw(e) {
  var cmdtext = cmdbarinp.value;
  if(cmdtext == "discord") {
    window.open("https://discord.gg/mDyTKs63x7");
  } else if(cmdtext == "sex") {
    if (confirm("Are you over 18? (translation: do you wana see sex)")) {
      let sex = Math.floor((Math.random() * 3) + 1);
      switch(sex) {
        case 1:
          window.open("https://www.reddit.com/r/yiff/");

        break
        case 2:
          window.open("https://www.pornhub.com/gay/");

        break
        case 3:
          window.open("https://pnrtscr.com/r2k3fw");

        break

      }
    }
  } 
  cmdbarinp.value = '';

}
