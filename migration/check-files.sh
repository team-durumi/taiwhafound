while read -r || [[ -n $REPLY ]]; do
    [[ -z $REPLY ]] && continue
    if [[ -f "/Users/mozo/Downloads/3/${REPLY}" ]]; then
        echo "$REPLY" >> "/Users/mozo/Downloads/foundfiles.txt"
    else
        echo "$REPLY" >> "/Users/mozo/Downloads/lostfiles.txt"
    fi
done < "/Users/mozo/Downloads/3.txt"