(()=>{"use strict";document.querySelector(".project-title > svg").addEventListener("click",(()=>{document.querySelector(".projects").appendChild(function(){const t=document.createElement("div");t.classList.add("menu-form");const e=document.createElement("form");e.setAttribute("action",""),e.setAttribute("method","post");const n=document.createElement("input");n.setAttribute("type","text"),n.setAttribute("id","project-title"),n.setAttribute("name","projectTitle");const c=document.createElement("div");c.classList.add("project-buttons");const d=document.createElement("button");d.classList.add("add-button"),d.setAttribute("type","button"),d.textContent="Add";const o=document.createElement("button");return o.classList.add("cancel-button"),o.setAttribute("type","button"),o.textContent="Cancel",d.addEventListener("click",(()=>{console.log("tester")})),o.addEventListener("click",(()=>{document.querySelector(".menu-form").remove()})),c.appendChild(d),c.appendChild(o),e.appendChild(n),e.appendChild(c),t.appendChild(e),t}())}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBR21CQSxTQUFTQyxjQUFjLHdCQUMvQkMsaUJBQWlCLFNBQVMsS0FFakJGLFNBQVNDLGNBQWMsYUFDL0JFLFlBY1osV0FFSSxNQUFNQyxFQUFXSixTQUFTSyxjQUFjLE9BQ3hDRCxFQUFTRSxVQUFVQyxJQUFJLGFBR3ZCLE1BQU1DLEVBQU9SLFNBQVNLLGNBQWMsUUFDcENHLEVBQUtDLGFBQWEsU0FBVSxJQUM1QkQsRUFBS0MsYUFBYSxTQUFVLFFBRzVCLE1BQU1DLEVBQVFWLFNBQVNLLGNBQWMsU0FDckNLLEVBQU1ELGFBQWEsT0FBUSxRQUMzQkMsRUFBTUQsYUFBYSxLQUFNLGlCQUN6QkMsRUFBTUQsYUFBYSxPQUFRLGdCQUczQixNQUFNRSxFQUFpQlgsU0FBU0ssY0FBYyxPQUM5Q00sRUFBZUwsVUFBVUMsSUFBSSxtQkFHN0IsTUFBTUssRUFBWVosU0FBU0ssY0FBYyxVQUN6Q08sRUFBVU4sVUFBVUMsSUFBSSxjQUN4QkssRUFBVUgsYUFBYSxPQUFRLFVBQy9CRyxFQUFVQyxZQUFjLE1BRXhCLE1BQU1DLEVBQWVkLFNBQVNLLGNBQWMsVUFzQjVDLE9BckJBUyxFQUFhUixVQUFVQyxJQUFJLGlCQUMzQk8sRUFBYUwsYUFBYSxPQUFRLFVBQ2xDSyxFQUFhRCxZQUFjLFNBRzNCRCxFQUFVVixpQkFBaUIsU0FBUyxLQUFPYSxRQUFRQyxJQUFJLFNBQVEsSUFDL0RGLEVBQWFaLGlCQUFpQixTQUFTLEtBbUIzQkYsU0FBU0MsY0FBYyxjQUMvQmdCLFFBbkJPLElBSVhOLEVBQWVSLFlBQVlTLEdBQzNCRCxFQUFlUixZQUFZVyxHQUczQk4sRUFBS0wsWUFBWU8sR0FDakJGLEVBQUtMLFlBQVlRLEdBR2pCUCxFQUFTRCxZQUFZSyxHQUVkSixDQUNYLENBL0R3QmMsR0FBWSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9qcy1tb2R1bGVzL3Byb2plY3RzLWNvbnRyb2wuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWRkVGl0bGUsIGdldFRpdGxlcywgZGVsZXRlVGl0bGV9IGZyb20gXCIuL3Byb2plY3RzXCJcblxuLy8gRXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBcIitcIiBidXR0b24gYmVzaWRlIHByb2plY3QgdGl0bGVcbmNvbnN0IHBsdXNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10aXRsZSA+IHN2ZycpXG5wbHVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vQ2FsbHMgZnVuY3Rpb24gdG8gYWRkIHRoZSBwcm9qZWN0IGZvcm0gdG8gdGhlIERPTVxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKVxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQoY3JlYXRlRm9ybSgpKVxuXG59KVxuXG4vLyBSZXR1cm5zIHRoZSBET00gZWxlbWVudCBvZiBhIG1lbnUtaXRlbSBcbi8vIGEgc2ltcGxlIHByb2plY3QgaXMgYWRkZWQgdG8gdGhlIGxpc3Qgb24gdGhlIERPTVxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0odGl0bGUpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKVxuICAgIGRpdi50ZXh0Q29udGVudCA9IHRpdGxlXG4gICAgcmV0dXJuIGRpdlxufVxuXG4vLyByZXR1cm5zIGEgZm9ybSBmb3IgRE9NIHRvIGJlIHVzZWQgdG8gY3JlYXRlIGEgbmV3IHByb2plY3RcbmZ1bmN0aW9uIGNyZWF0ZUZvcm0oKSB7XG4gICAgLy8gY3JlYXRlIHRoZSBkaXYgdGhhdCBlbmNvbXBhc3NlcyB0aGUgZW50aXJlIGJsb2NrXG4gICAgY29uc3QgbWVudUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lbnVGb3JtLmNsYXNzTGlzdC5hZGQoJ21lbnUtZm9ybScpXG5cbiAgICAvLyBjcmVhdGUgdGhlIGZvcm0gYW5kIGFkZCBhdHRyaWJ1dGVzXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdhY3Rpb24nLCBcIlwiKVxuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCAncG9zdCcpXG5cbiAgICAvLyBjcmVhdGUgdGhlIGlucHV0IGJveCBmb3IgdGV4dFxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QtdGl0bGUnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcm9qZWN0VGl0bGUnKVxuXG4gICAgLy8gY3JlYXRlIGRpdiB0byBlbmNvbXBhc3MgYnV0dG9uc1xuICAgIGNvbnN0IHByb2plY3RCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcm9qZWN0QnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJ1dHRvbnMnKVxuXG4gICAgLy9jcmVhdGUgdGhlIGJ1dHRvbnNcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtYnV0dG9uJylcbiAgICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGRcIlxuXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2FuY2VsLWJ1dHRvbicpXG4gICAgY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCJcblxuICAgIC8vIGFkZCBldmVudGxpc3RlbmVyc1xuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtjb25zb2xlLmxvZygndGVzdGVyJyl9KVxuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2FuY2VsKClcbiAgICB9KVxuXG4gICAgLy8gQXBwZW5kIHRoZSBidXR0b25zIHRvIHByb2plY3RCdXR0b25zXG4gICAgcHJvamVjdEJ1dHRvbnMuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKVxuICAgIHByb2plY3RCdXR0b25zLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbilcblxuICAgIC8vIEFwcGVuZCBpbnB1dCB0byBmb3JtIHRoZW4gcHJvamVjdEJ1dHRvbnMgdG8gZm9ybVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0QnV0dG9ucylcblxuICAgIC8vIGFwcGVuZCBmb3JtIHRvIHRoZSBtYWluIGRpdiAobWVudUZvcm0pXG4gICAgbWVudUZvcm0uYXBwZW5kQ2hpbGQoZm9ybSlcblxuICAgIHJldHVybiBtZW51Rm9ybVxufVxuXG5mdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtZm9ybScpXG4gICAgZGl2LnJlbW92ZSgpXG59XG5cbiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiYXBwZW5kQ2hpbGQiLCJtZW51Rm9ybSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJmb3JtIiwic2V0QXR0cmlidXRlIiwiaW5wdXQiLCJwcm9qZWN0QnV0dG9ucyIsImFkZEJ1dHRvbiIsInRleHRDb250ZW50IiwiY2FuY2VsQnV0dG9uIiwiY29uc29sZSIsImxvZyIsInJlbW92ZSIsImNyZWF0ZUZvcm0iXSwic291cmNlUm9vdCI6IiJ9