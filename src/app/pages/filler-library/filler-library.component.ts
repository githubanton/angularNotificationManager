import { Component, OnInit, ViewChild } from '@angular/core';
import { TextInputHighlightComponent } from 'angular-text-input-highlight/text-input-highlight.component';
import { HighlightTag } from 'angular-text-input-highlight';

@Component({
  moduleId: module.id,
  selector: 'ngx-filler-library',
  templateUrl: 'filler-library.component.html',
  styleUrls: ['./filler-library.component.scss'],
})

export class FillerLibraryComponent implements OnInit {

  @ViewChild('highlight') highlight: TextInputHighlightComponent;
  @ViewChild('highlightTitle') highlightTitle: TextInputHighlightComponent;

  tags = [
    {
      color: 'danger',
      name: 'Category 1',
    },
    {
      color: 'success',
      name: 'Category 2',
    },
    {
      color: 'primary',
      name: 'Category 3',
    },
    {
      color: 'info',
      name: 'Category 4',
    },
    {
      color: 'yellow',
      name: 'Category 5',
    },
  ];
  taggedWords = [];
  taggedTitleWords = [];
  text = '';
  field = '';
  start = 0;
  end = 0;

  ngOnInit() {
  }

  tagSelection(tag) {
    const textComponent = this.field === 'body' ?
      this.highlight.textInputElement :
      this.highlightTitle.textInputElement;
    const taggedArray = this.field === 'body' ? this.taggedTitleWords.slice() : this.taggedWords.slice();
    const tagData = {
      indices: {
        start: this.start,
        end: this.end,
      },
      cssClass: tag.color,
      data: textComponent.value.slice(this.start, this.end),
    };
    if (!taggedArray.filter(t => this.overlaps(t, tagData)).length) {
      this.field === 'body' ? this.taggedTitleWords.push(tagData) : this.taggedWords.push(tagData);
      textComponent.dispatchEvent(new Event('input'));
    }
    setTimeout(() => {
      this.start = 0;
      this.end = 0;
      this.field = '';
    }, 100);
  }

  selectText(target: HTMLTextAreaElement, field) {
    this.start = target.selectionStart;
    this.end = target.selectionEnd;
    this.field = field;
  }

  indexIsInsideTag(index: number, tag: HighlightTag) {
    return tag.indices.start <= index && index <= tag.indices.end;
  }

  overlaps(tagA: HighlightTag, tagB: HighlightTag) {
    return (
      this.indexIsInsideTag(tagB.indices.start, tagA) ||
      this.indexIsInsideTag(tagB.indices.end, tagA)
    );
  }

  refreshHighlights() {
    this.highlight.refresh();
    this.highlightTitle.refresh();
  }
}
