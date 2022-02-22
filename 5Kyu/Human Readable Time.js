function humanReadable (seconds) {
    tr=(d)=>{ return (d < 10) ? '0' + d.toString() : d.toString();}
    hh=tr(parseInt(seconds/3600))
    mm=tr(parseInt((seconds-hh*3600)/60))
    ss=tr(parseInt((seconds-(mm*60+hh*3600))))
    return hh+":"+mm+":"+ss;
  }