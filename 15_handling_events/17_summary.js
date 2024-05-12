// Summary
// Event handlers make it possible to detect and react to events happening in our web page. The 
// addEventListener method is used to register such a handler.
//
// Each event has a type ("keydown", "focus", and so on) that identifies it. Most events are called
// on a specific DOM element and then propagate to that element’s ancestors, allowing handlers 
// associated with those elements to handle them.
//
// When an event handler is called, it’s passed an event object with additional information about 
// the event. This object also has methods that allow us to stop further propagation 
// (stopPropagation) and prevent the browser’s default handling of the event (preventDefault).
//
// Pressing a key fires "keydown" and "keyup" events. Pressing a mouse button fires "mousedown", 
// "mouseup", and "click" events. Moving the mouse fires "mousemove" events. Touchscreen 
// interaction will result in "touchstart", "touchmove", and "touchend" events.
//
// Scrolling can be detected with the "scroll" event, and focus changes can be detected with the 
// "focus" and "blur" events. When the document finishes loading, a "load" event fires on the 
// window.
