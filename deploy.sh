npm run build &&
  zip -r cv.zip dist &&
  scp cv.zip victor141516@viti.site:cv.zip &&
  rm cv.zip &&
  ssh victor141516@viti.site 'zsh -i -c "rm -rf services/webs/cv.viti.site/* ; unzip cv.zip -d services/webs/cv.viti.site && \
    rm cv.zip && \
    mv services/webs/cv.viti.site/dist/* services/webs/cv.viti.site && \
    rmdir services/webs/cv.viti.site/dist"'
