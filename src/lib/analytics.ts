export const trackEvent = async (eventName: string, data: any = {}) => {
    try {
        await fetch('/api/track', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                event: eventName,
                ...data,
                timestamp: new Date().toISOString(),
                url: window.location.href,
                referrer: document.referrer
            })
        })
    } catch (e) {
        console.error('Analytics Error:', e)
    }
}
