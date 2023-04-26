
// 동영상 팝업기능
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');
const popupVideo = document.getElementById('popup-video');

function showPopup(src) {
    popupVideo.src = src;
    popup.classList.remove('hidden');
}

function hidePopup() {
    popupVideo.src = '';
    popup.classList.add('hidden');
}

closePopup.addEventListener('click', hidePopup);


// 클릭시 확대 기능
function openMediaFullscreen(media) {
    const fullscreenContainer = document.createElement('div');
    fullscreenContainer.style.position = 'fixed';
    fullscreenContainer.style.top = '0';
    fullscreenContainer.style.left = '0';
    fullscreenContainer.style.width = '100%';
    fullscreenContainer.style.height = '100%';
    fullscreenContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    fullscreenContainer.style.display = 'flex';
    fullscreenContainer.style.justifyContent = 'center';
    fullscreenContainer.style.alignItems = 'center';
    fullscreenContainer.style.zIndex = '100';

    const mediaClone = media.cloneNode(true);
    mediaClone.style.maxWidth = '90%';
    mediaClone.style.maxHeight = '90%';

    fullscreenContainer.appendChild(mediaClone);

    document.body.appendChild(fullscreenContainer);

    fullscreenContainer.addEventListener('click', () => {
        fullscreenContainer.remove();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const mediaContainer = document.getElementById('media-container');

    for (const mediaFile of mediaFiles) {
        const media = document.createElement('div');
        media.className = 'media';
        const mediaFilePath = `/media/experiments/${mediaFile}`;

        if (mediaFile.endsWith('.jpg') || mediaFile.endsWith('.jpeg') || mediaFile.endsWith('.png') || mediaFile.endsWith('.gif')) {
            const img = document.createElement('img');
            img.src = mediaFilePath;
            img.alt = mediaFile;
            media.appendChild(img);
        } else if (mediaFile.endsWith('.mp4') || mediaFile.endsWith('.webm')) {
            //const video = document.createElement('video');
            //video.src = mediaFilePath;
            //video.controls = true;
            //media.appendChild(video);
            const video = document.createElement('video');
            video.src = mediaFilePath;
            video.controls = true;
            media.appendChild(video);
            video.addEventListener('click', (e) => {
                e.preventDefault();
                showPopup(mediaFilePath);
            });


        } else {
            continue;
        }

        media.addEventListener('click', () => {
            openMediaFullscreen(media);
        });

        mediaContainer.appendChild(media);
    }
});
