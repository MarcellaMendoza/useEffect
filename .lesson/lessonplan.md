# Lesson plan
  
---

```
  useEffect( async () => {
    const raw = await fetch('https://freegeoip.app/json/')
    const json = await raw.json()
    setStateName(json.region_name)
    setCityName(json.city)
  }, [] )
```

And then something like this in the App component:
```
<h1>{stateName === "Texas" ? "Howdy!" : "Hi there!"}</h1>
```