// ============ Simple UI Latency Profiler ============ //

// 1) Track interaction latency (click → next paint)
document.addEventListener('click', function (event) {
  const start = performance.now();
  requestAnimationFrame(() => {
    const latency = performance.now() - start;
    console.log(
      '%c[UI PROFILER] Interaction latency:',
      'color: #0070f3; font-weight: bold;',
      latency.toFixed(2) + ' ms',
      'Target:', event.target.tagName
    );
  });
});

// 2) Observe long tasks (main-thread blocking > 50 ms)
if ('PerformanceObserver' in window) {
  try {
    const longTaskObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log(
          '%c[UI PROFILER] Long task detected:',
          'color: #ff4d4f; font-weight: bold;',
          entry.duration.toFixed(2) + ' ms'
        );
      }
    });
    longTaskObserver.observe({ entryTypes: ['longtask'] });
  } catch (e) {
    console.warn('LongTask API not supported in this browser.');
  }

  // 3) Observe layout shifts (basic CLS-like behavior)
  try {
    let totalLayoutShift = 0;
    const layoutObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          totalLayoutShift += entry.value;
          console.log(
            '%c[UI PROFILER] Layout shift:',
            'color: #faad14; font-weight: bold;',
            'Value:', entry.value.toFixed(4),
            'Total:', totalLayoutShift.toFixed(4)
          );
        }
      }
    });
    layoutObserver.observe({ entryTypes: ['layout-shift'] });
  } catch (e) {
    console.warn('LayoutShift API not supported in this browser.');
  }

  // 4) Observe paint events (for render timing hints)
  try {
    const paintObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log(
          '%c[UI PROFILER] Paint event:',
          'color: #52c41a; font-weight: bold;',
          entry.name,
          '-', entry.startTime.toFixed(2), 'ms'
        );
      }
    });
    paintObserver.observe({ entryTypes: ['paint'] });
  } catch (e) {
    console.warn('Paint Timing API not supported in this browser.');
  }
}

console.log('%c[UI PROFILER] Profiler initialized.', 'color: purple; font-weight: bold;');
