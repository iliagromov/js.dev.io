let obj = {
    cnt: 1,
    met: function() {
        console.log(this.cnt);
    },
    met2: () => {
        console.log(this.cnt);
    }
}

obj.met();

// cnt undefined
met2();
obj.call(1)