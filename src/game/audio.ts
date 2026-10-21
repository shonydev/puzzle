/**
* Web Audio API synthesizer for AquaSort.
* Zero external audio files, works completely offline, zero broken audio links.
*/
class SoundEngine {
	constructor() {
		this.ctx = null;
		this.enabled = true;
	}
	initContext() {
		if (!this.ctx && typeof window !== "undefined") {
			const AudioCtx = window.AudioContext || window.webkitAudioContext;
			if (AudioCtx) {
				this.ctx = new AudioCtx();
			}
		}
		if (this.ctx && this.ctx.state === "suspended") {
			this.ctx.resume();
		}
	}
	// Soft resonant glass tap when selecting a tube
	playSelect() {
		if (!this.enabled) return;
		this.initContext();
		if (!this.ctx) return;
		const osc = this.ctx.createOscillator();
		const gain = this.ctx.createGain();
		osc.type = "sine";
		const now = this.ctx.currentTime;
		osc.frequency.setValueAtTime(640, now);
		osc.frequency.exponentialRampToValueAtTime(320, now + .08);
		gain.gain.setValueAtTime(.12, now);
		gain.gain.exponentialRampToValueAtTime(.001, now + .08);
		osc.connect(gain);
		gain.connect(this.ctx.destination);
		osc.start(now);
		osc.stop(now + .08);
	}
	// Realistic water pour: filtered bubbling noise and modulated tone
	playPour(units = 1) {
		if (!this.enabled) return;
		this.initContext();
		if (!this.ctx) return;
		const duration = Math.min(.6, .2 + units * .12);
		const now = this.ctx.currentTime;
		// Fluid bubbling oscillator
		const osc = this.ctx.createOscillator();
		const gain = this.ctx.createGain();
		const filter = this.ctx.createBiquadFilter();
		osc.type = "triangle";
		osc.frequency.setValueAtTime(280, now);
		osc.frequency.linearRampToValueAtTime(360 + units * 40, now + duration);
		filter.type = "bandpass";
		filter.frequency.setValueAtTime(600, now);
		filter.Q.setValueAtTime(3, now);
		gain.gain.setValueAtTime(.01, now);
		gain.gain.linearRampToValueAtTime(.15, now + .05);
		gain.gain.exponentialRampToValueAtTime(.001, now + duration);
		osc.connect(filter);
		filter.connect(gain);
		gain.connect(this.ctx.destination);
		osc.start(now);
		osc.stop(now + duration);
		// Micro bubble pop
		for (let i = 0; i < units + 1; i++) {
			const popTime = now + .05 + i * .08;
			const popOsc = this.ctx.createOscillator();
			const popGain = this.ctx.createGain();
			popOsc.type = "sine";
			popOsc.frequency.setValueAtTime(450 + i * 80, popTime);
			popOsc.frequency.exponentialRampToValueAtTime(800 + i * 100, popTime + .04);
			popGain.gain.setValueAtTime(.08, popTime);
			popGain.gain.exponentialRampToValueAtTime(.001, popTime + .04);
			popOsc.connect(popGain);
			popGain.connect(this.ctx.destination);
			popOsc.start(popTime);
			popOsc.stop(popTime + .04);
		}
	}
	// Harmonic chime when a tube is completed (all 4 same color)
	playTubeComplete() {
		if (!this.enabled) return;
		this.initContext();
		if (!this.ctx) return;
		const now = this.ctx.currentTime;
		const notes = [
			523.25,
			659.25,
			783.99
		];
		notes.forEach((freq, i) => {
			const osc = this.ctx.createOscillator();
			const gain = this.ctx.createGain();
			osc.type = "sine";
			osc.frequency.setValueAtTime(freq, now + i * .05);
			gain.gain.setValueAtTime(.12, now + i * .05);
			gain.gain.exponentialRampToValueAtTime(.001, now + i * .05 + .4);
			osc.connect(gain);
			gain.connect(this.ctx.destination);
			osc.start(now + i * .05);
			osc.stop(now + i * .05 + .45);
		});
	}
	// Victory celebration fanfare
	playWin() {
		if (!this.enabled) return;
		this.initContext();
		if (!this.ctx) return;
		const now = this.ctx.currentTime;
		const melody = [
			{
				f: 523.25,
				t: 0,
				d: .12
			},
			{
				f: 659.25,
				t: .12,
				d: .12
			},
			{
				f: 783.99,
				t: .24,
				d: .14
			},
			{
				f: 1046.5,
				t: .38,
				d: .35
			}
		];
		melody.forEach(({ f, t, d }) => {
			const osc = this.ctx.createOscillator();
			const gain = this.ctx.createGain();
			osc.type = "triangle";
			osc.frequency.setValueAtTime(f, now + t);
			gain.gain.setValueAtTime(.18, now + t);
			gain.gain.exponentialRampToValueAtTime(.001, now + t + d);
			osc.connect(gain);
			gain.connect(this.ctx.destination);
			osc.start(now + t);
			osc.stop(now + t + d);
		});
	}
	// Low subtle error thud
	playError() {
		if (!this.enabled) return;
		this.initContext();
		if (!this.ctx) return;
		const now = this.ctx.currentTime;
		const osc = this.ctx.createOscillator();
		const gain = this.ctx.createGain();
		osc.type = "sine";
		osc.frequency.setValueAtTime(140, now);
		osc.frequency.exponentialRampToValueAtTime(80, now + .1);
		gain.gain.setValueAtTime(.1, now);
		gain.gain.exponentialRampToValueAtTime(.001, now + .1);
		osc.connect(gain);
		gain.connect(this.ctx.destination);
		osc.start(now);
		osc.stop(now + .1);
	}
}
export const sound = new SoundEngine();

//# sourceMappingURL=data:application/json;base64,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LEdBQUcsTUFBTSxDQUFDO0dBRXZDLEtBQUssS0FBSyxlQUFlLEtBQU0sTUFBTSxDQUFDO0dBQ3RDLEtBQUssS0FBSyw2QkFBNkIsTUFBTyxNQUFNLElBQUksQ0FBQztHQUV6RCxJQUFJLFFBQVEsSUFBSTtHQUNoQixLQUFLLFFBQVEsS0FBSyxJQUFLLFdBQVc7R0FFbEMsSUFBSSxNQUFNLE1BQU0sQ0FBQztHQUNqQixJQUFJLEtBQUssTUFBTSxJQUFJLENBQUM7RUFDdEIsQ0FBQztDQUNIOztDQUdBLFlBQVk7RUFDVixJQUFJLENBQUMsS0FBSyxTQUFTO0VBQ25CLEtBQUssWUFBWTtFQUNqQixJQUFJLENBQUMsS0FBSyxLQUFLO0VBRWYsTUFBTSxNQUFNLEtBQUssSUFBSTtFQUNyQixNQUFNLE1BQU0sS0FBSyxJQUFJLGlCQUFpQjtFQUN0QyxNQUFNLE9BQU8sS0FBSyxJQUFJLFdBQVc7RUFFakMsSUFBSSxPQUFPO0VBQ1gsSUFBSSxVQUFVLGVBQWUsS0FBSyxHQUFHO0VBQ3JDLElBQUksVUFBVSw2QkFBNkIsSUFBSSxNQUFNLEVBQUc7RUFFeEQsS0FBSyxLQUFLLGVBQWUsSUFBSyxHQUFHO0VBQ2pDLEtBQUssS0FBSyw2QkFBNkIsTUFBTyxNQUFNLEVBQUc7RUFFdkQsSUFBSSxRQUFRLElBQUk7RUFDaEIsS0FBSyxRQUFRLEtBQUssSUFBSSxXQUFXO0VBRWpDLElBQUksTUFBTSxHQUFHO0VBQ2IsSUFBSSxLQUFLLE1BQU0sRUFBRztDQUNwQjtBQUNGO0FBRUEsT0FBTyxNQUFNLFFBQVEsSUFBSSxZQUFZIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbImF1ZGlvLnRzIl0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2ViIEF1ZGlvIEFQSSBzeW50aGVzaXplciBmb3IgQXF1YVNvcnQuXG4gKiBaZXJvIGV4dGVybmFsIGF1ZGlvIGZpbGVzLCB3b3JrcyBjb21wbGV0ZWx5IG9mZmxpbmUsIHplcm8gYnJva2VuIGF1ZGlvIGxpbmtzLlxuICovXG5cbmNsYXNzIFNvdW5kRW5naW5lIHtcbiAgcHJpdmF0ZSBjdHg6IEF1ZGlvQ29udGV4dCB8IG51bGwgPSBudWxsO1xuICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cbiAgcHJpdmF0ZSBpbml0Q29udGV4dCgpIHtcbiAgICBpZiAoIXRoaXMuY3R4ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zdCBBdWRpb0N0eCA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgKHdpbmRvdyBhcyB1bmtub3duIGFzIHsgd2Via2l0QXVkaW9Db250ZXh0OiB0eXBlb2YgQXVkaW9Db250ZXh0IH0pLndlYmtpdEF1ZGlvQ29udGV4dDtcbiAgICAgIGlmIChBdWRpb0N0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IG5ldyBBdWRpb0N0eCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5jdHggJiYgdGhpcy5jdHguc3RhdGUgPT09ICdzdXNwZW5kZWQnKSB7XG4gICAgICB0aGlzLmN0eC5yZXN1bWUoKTtcbiAgICB9XG4gIH1cblxuICAvLyBTb2Z0IHJlc29uYW50IGdsYXNzIHRhcCB3aGVuIHNlbGVjdGluZyBhIHR1YmVcbiAgcGxheVNlbGVjdCgpIHtcbiAgICBpZiAoIXRoaXMuZW5hYmxlZCkgcmV0dXJuO1xuICAgIHRoaXMuaW5pdENvbnRleHQoKTtcbiAgICBpZiAoIXRoaXMuY3R4KSByZXR1cm47XG5cbiAgICBjb25zdCBvc2MgPSB0aGlzLmN0eC5jcmVhdGVPc2NpbGxhdG9yKCk7XG4gICAgY29uc3QgZ2FpbiA9IHRoaXMuY3R4LmNyZWF0ZUdhaW4oKTtcblxuICAgIG9zYy50eXBlID0gJ3NpbmUnO1xuICAgIGNvbnN0IG5vdyA9IHRoaXMuY3R4LmN1cnJlbnRUaW1lO1xuICAgIG9zYy5mcmVxdWVuY3kuc2V0VmFsdWVBdFRpbWUoNjQwLCBub3cpO1xuICAgIG9zYy5mcmVxdWVuY3kuZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSgzMjAsIG5vdyArIDAuMDgpO1xuXG4gICAgZ2Fpbi5nYWluLnNldFZhbHVlQXRUaW1lKDAuMTIsIG5vdyk7XG4gICAgZ2Fpbi5nYWluLmV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUoMC4wMDEsIG5vdyArIDAuMDgpO1xuXG4gICAgb3NjLmNvbm5lY3QoZ2Fpbik7XG4gICAgZ2Fpbi5jb25uZWN0KHRoaXMuY3R4LmRlc3RpbmF0aW9uKTtcblxuICAgIG9zYy5zdGFydChub3cpO1xuICAgIG9zYy5zdG9wKG5vdyArIDAuMDgpO1xuICB9XG5cbiAgLy8gUmVhbGlzdGljIHdhdGVyIHBvdXI6IGZpbHRlcmVkIGJ1YmJsaW5nIG5vaXNlIGFuZCBtb2R1bGF0ZWQgdG9uZVxuICBwbGF5UG91cih1bml0czogbnVtYmVyID0gMSkge1xuICAgIGlmICghdGhpcy5lbmFibGVkKSByZXR1cm47XG4gICAgdGhpcy5pbml0Q29udGV4dCgpO1xuICAgIGlmICghdGhpcy5jdHgpIHJldHVybjtcblxuICAgIGNvbnN0IGR1cmF0aW9uID0gTWF0aC5taW4oMC42LCAwLjIgKyB1bml0cyAqIDAuMTIpO1xuICAgIGNvbnN0IG5vdyA9IHRoaXMuY3R4LmN1cnJlbnRUaW1lO1xuXG4gICAgLy8gRmx1aWQgYnViYmxpbmcgb3NjaWxsYXRvclxuICAgIGNvbnN0IG9zYyA9IHRoaXMuY3R4LmNyZWF0ZU9zY2lsbGF0b3IoKTtcbiAgICBjb25zdCBnYWluID0gdGhpcy5jdHguY3JlYXRlR2FpbigpO1xuICAgIGNvbnN0IGZpbHRlciA9IHRoaXMuY3R4LmNyZWF0ZUJpcXVhZEZpbHRlcigpO1xuXG4gICAgb3NjLnR5cGUgPSAndHJpYW5nbGUnO1xuICAgIG9zYy5mcmVxdWVuY3kuc2V0VmFsdWVBdFRpbWUoMjgwLCBub3cpO1xuICAgIG9zYy5mcmVxdWVuY3kubGluZWFyUmFtcFRvVmFsdWVBdFRpbWUoMzYwICsgdW5pdHMgKiA0MCwgbm93ICsgZHVyYXRpb24pO1xuXG4gICAgZmlsdGVyLnR5cGUgPSAnYmFuZHBhc3MnO1xuICAgIGZpbHRlci5mcmVxdWVuY3kuc2V0VmFsdWVBdFRpbWUoNjAwLCBub3cpO1xuICAgIGZpbHRlci5RLnNldFZhbHVlQXRUaW1lKDMsIG5vdyk7XG5cbiAgICBnYWluLmdhaW4uc2V0VmFsdWVBdFRpbWUoMC4wMSwgbm93KTtcbiAgICBnYWluLmdhaW4ubGluZWFyUmFtcFRvVmFsdWVBdFRpbWUoMC4xNSwgbm93ICsgMC4wNSk7XG4gICAgZ2Fpbi5nYWluLmV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUoMC4wMDEsIG5vdyArIGR1cmF0aW9uKTtcblxuICAgIG9zYy5jb25uZWN0KGZpbHRlcik7XG4gICAgZmlsdGVyLmNvbm5lY3QoZ2Fpbik7XG4gICAgZ2Fpbi5jb25uZWN0KHRoaXMuY3R4LmRlc3RpbmF0aW9uKTtcblxuICAgIG9zYy5zdGFydChub3cpO1xuICAgIG9zYy5zdG9wKG5vdyArIGR1cmF0aW9uKTtcblxuICAgIC8vIE1pY3JvIGJ1YmJsZSBwb3BcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVuaXRzICsgMTsgaSsrKSB7XG4gICAgICBjb25zdCBwb3BUaW1lID0gbm93ICsgMC4wNSArIGkgKiAwLjA4O1xuICAgICAgY29uc3QgcG9wT3NjID0gdGhpcy5jdHguY3JlYXRlT3NjaWxsYXRvcigpO1xuICAgICAgY29uc3QgcG9wR2FpbiA9IHRoaXMuY3R4LmNyZWF0ZUdhaW4oKTtcblxuICAgICAgcG9wT3NjLnR5cGUgPSAnc2luZSc7XG4gICAgICBwb3BPc2MuZnJlcXVlbmN5LnNldFZhbHVlQXRUaW1lKDQ1MCArIGkgKiA4MCwgcG9wVGltZSk7XG4gICAgICBwb3BPc2MuZnJlcXVlbmN5LmV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUoODAwICsgaSAqIDEwMCwgcG9wVGltZSArIDAuMDQpO1xuXG4gICAgICBwb3BHYWluLmdhaW4uc2V0VmFsdWVBdFRpbWUoMC4wOCwgcG9wVGltZSk7XG4gICAgICBwb3BHYWluLmdhaW4uZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSgwLjAwMSwgcG9wVGltZSArIDAuMDQpO1xuXG4gICAgICBwb3BPc2MuY29ubmVjdChwb3BHYWluKTtcbiAgICAgIHBvcEdhaW4uY29ubmVjdCh0aGlzLmN0eC5kZXN0aW5hdGlvbik7XG5cbiAgICAgIHBvcE9zYy5zdGFydChwb3BUaW1lKTtcbiAgICAgIHBvcE9zYy5zdG9wKHBvcFRpbWUgKyAwLjA0KTtcbiAgICB9XG4gIH1cblxuICAvLyBIYXJtb25pYyBjaGltZSB3aGVuIGEgdHViZSBpcyBjb21wbGV0ZWQgKGFsbCA0IHNhbWUgY29sb3IpXG4gIHBsYXlUdWJlQ29tcGxldGUoKSB7XG4gICAgaWYgKCF0aGlzLmVuYWJsZWQpIHJldHVybjtcbiAgICB0aGlzLmluaXRDb250ZXh0KCk7XG4gICAgaWYgKCF0aGlzLmN0eCkgcmV0dXJuO1xuXG4gICAgY29uc3Qgbm93ID0gdGhpcy5jdHguY3VycmVudFRpbWU7XG4gICAgY29uc3Qgbm90ZXMgPSBbNTIzLjI1LCA2NTkuMjUsIDc4My45OV07IC8vIEM1LCBFNSwgRzVcblxuICAgIG5vdGVzLmZvckVhY2goKGZyZXEsIGkpID0+IHtcbiAgICAgIGNvbnN0IG9zYyA9IHRoaXMuY3R4IS5jcmVhdGVPc2NpbGxhdG9yKCk7XG4gICAgICBjb25zdCBnYWluID0gdGhpcy5jdHghLmNyZWF0ZUdhaW4oKTtcblxuICAgICAgb3NjLnR5cGUgPSAnc2luZSc7XG4gICAgICBvc2MuZnJlcXVlbmN5LnNldFZhbHVlQXRUaW1lKGZyZXEsIG5vdyArIGkgKiAwLjA1KTtcblxuICAgICAgZ2Fpbi5nYWluLnNldFZhbHVlQXRUaW1lKDAuMTIsIG5vdyArIGkgKiAwLjA1KTtcbiAgICAgIGdhaW4uZ2Fpbi5leHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lKDAuMDAxLCBub3cgKyBpICogMC4wNSArIDAuNCk7XG5cbiAgICAgIG9zYy5jb25uZWN0KGdhaW4pO1xuICAgICAgZ2Fpbi5jb25uZWN0KHRoaXMuY3R4IS5kZXN0aW5hdGlvbik7XG5cbiAgICAgIG9zYy5zdGFydChub3cgKyBpICogMC4wNSk7XG4gICAgICBvc2Muc3RvcChub3cgKyBpICogMC4wNSArIDAuNDUpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gVmljdG9yeSBjZWxlYnJhdGlvbiBmYW5mYXJlXG4gIHBsYXlXaW4oKSB7XG4gICAgaWYgKCF0aGlzLmVuYWJsZWQpIHJldHVybjtcbiAgICB0aGlzLmluaXRDb250ZXh0KCk7XG4gICAgaWYgKCF0aGlzLmN0eCkgcmV0dXJuO1xuXG4gICAgY29uc3Qgbm93ID0gdGhpcy5jdHguY3VycmVudFRpbWU7XG4gICAgY29uc3QgbWVsb2R5ID0gW1xuICAgICAgeyBmOiA1MjMuMjUsIHQ6IDAuMCwgZDogMC4xMiB9LCAvLyBDNVxuICAgICAgeyBmOiA2NTkuMjUsIHQ6IDAuMTIsIGQ6IDAuMTIgfSwgLy8gRTVcbiAgICAgIHsgZjogNzgzLjk5LCB0OiAwLjI0LCBkOiAwLjE0IH0sIC8vIEc1XG4gICAgICB7IGY6IDEwNDYuNSwgdDogMC4zOCwgZDogMC4zNSB9LCAvLyBDNlxuICAgIF07XG5cbiAgICBtZWxvZHkuZm9yRWFjaCgoeyBmLCB0LCBkIH0pID0+IHtcbiAgICAgIGNvbnN0IG9zYyA9IHRoaXMuY3R4IS5jcmVhdGVPc2NpbGxhdG9yKCk7XG4gICAgICBjb25zdCBnYWluID0gdGhpcy5jdHghLmNyZWF0ZUdhaW4oKTtcblxuICAgICAgb3NjLnR5cGUgPSAndHJpYW5nbGUnO1xuICAgICAgb3NjLmZyZXF1ZW5jeS5zZXRWYWx1ZUF0VGltZShmLCBub3cgKyB0KTtcblxuICAgICAgZ2Fpbi5nYWluLnNldFZhbHVlQXRUaW1lKDAuMTgsIG5vdyArIHQpO1xuICAgICAgZ2Fpbi5nYWluLmV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUoMC4wMDEsIG5vdyArIHQgKyBkKTtcblxuICAgICAgb3NjLmNvbm5lY3QoZ2Fpbik7XG4gICAgICBnYWluLmNvbm5lY3QodGhpcy5jdHghLmRlc3RpbmF0aW9uKTtcblxuICAgICAgb3NjLnN0YXJ0KG5vdyArIHQpO1xuICAgICAgb3NjLnN0b3Aobm93ICsgdCArIGQpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gTG93IHN1YnRsZSBlcnJvciB0aHVkXG4gIHBsYXlFcnJvcigpIHtcbiAgICBpZiAoIXRoaXMuZW5hYmxlZCkgcmV0dXJuO1xuICAgIHRoaXMuaW5pdENvbnRleHQoKTtcbiAgICBpZiAoIXRoaXMuY3R4KSByZXR1cm47XG5cbiAgICBjb25zdCBub3cgPSB0aGlzLmN0eC5jdXJyZW50VGltZTtcbiAgICBjb25zdCBvc2MgPSB0aGlzLmN0eC5jcmVhdGVPc2NpbGxhdG9yKCk7XG4gICAgY29uc3QgZ2FpbiA9IHRoaXMuY3R4LmNyZWF0ZUdhaW4oKTtcblxuICAgIG9zYy50eXBlID0gJ3NpbmUnO1xuICAgIG9zYy5mcmVxdWVuY3kuc2V0VmFsdWVBdFRpbWUoMTQwLCBub3cpO1xuICAgIG9zYy5mcmVxdWVuY3kuZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSg4MCwgbm93ICsgMC4xKTtcblxuICAgIGdhaW4uZ2Fpbi5zZXRWYWx1ZUF0VGltZSgwLjEsIG5vdyk7XG4gICAgZ2Fpbi5nYWluLmV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUoMC4wMDEsIG5vdyArIDAuMSk7XG5cbiAgICBvc2MuY29ubmVjdChnYWluKTtcbiAgICBnYWluLmNvbm5lY3QodGhpcy5jdHguZGVzdGluYXRpb24pO1xuXG4gICAgb3NjLnN0YXJ0KG5vdyk7XG4gICAgb3NjLnN0b3Aobm93ICsgMC4xKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc291bmQgPSBuZXcgU291bmRFbmdpbmUoKTtcbiJdfQ==